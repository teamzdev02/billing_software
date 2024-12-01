import json
import psycopg2
from psycopg2.extras import RealDictCursor
from http.server import BaseHTTPRequestHandler, HTTPServer

# Establish database connection
def get_db_connection():
    try:
        conn = psycopg2.connect(
            dbname="billing_project",
            user="postgres",
            password="root",
            host="localhost",
            port="5432"
        )
        return conn
    except Exception as e:
        raise Exception(f"Database connection error: {e}")

class RequestHandler(BaseHTTPRequestHandler):
    
    def send_cors_headers(self):
        """Add CORS headers to allow cross-origin requests."""
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow all origins (or restrict to specific domains)
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')  # Allow specific methods
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')  # Allow specific headers (e.g., Content-Type)
    
    def do_OPTIONS(self):
        """Handle OPTIONS request for CORS preflight check."""
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def do_POST(self):
        """Handle POST requests to save or fetch data."""
        if self.path == '/save_data':
            self.handle_save_data()
        elif self.path == '/fetch_data':
            self.handle_fetch_data()
        else:
            self.send_error(404, "Endpoint not found")

    def handle_save_data(self):
        """Handle the saving of data to the specified table."""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)

            if isinstance(data, list):
                # If data is a list, process each entry
                table_name = data[0].get('table_name') if data else None
                data = [entry.get('data') for entry in data]  # Assuming each entry has 'data'
            else:
                # If data is a single object
                table_name = data.get('table_name')
                data = data.get('data')

            if not table_name or not data:
                self.send_error(400, "Missing 'table_name' or 'data'")
                return

            self.save_data(table_name, data)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_cors_headers()  # Add CORS headers for this response
            self.end_headers()
            self.wfile.write(json.dumps({"status": "success", "message": "Data inserted successfully"}).encode())
        except Exception as e:
            self.send_error(500, f"Server error: {str(e)}")

    def handle_fetch_data(self):
        """Handle fetching of data from the specified table."""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)

            if isinstance(data, list):
                # If data is a list, process each entry
                table_name = data[0].get('table_name') if data else None
            else:
                # If data is a single object
                table_name = data.get('table_name')

            filters = data.get('filters', {}) if data else {}

            if not table_name:
                self.send_error(400, "Missing 'table_name'")
                return

            rows = self.fetch_data(table_name, filters)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_cors_headers()  # Add CORS headers for this response
            self.end_headers()
            self.wfile.write(json.dumps({"status": "success", "data": rows}).encode())
        except Exception as e:
            self.send_error(500, f"Server error: {str(e)}")

    def save_data(self, table_name, data):
        """Insert data into the specified table."""
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            
            if isinstance(data, list):
                # Handle bulk insert
                keys = data[0].keys()
                values = [tuple(entry.values()) for entry in data]
                placeholders = ', '.join(['%s'] * len(keys))
                query = f"INSERT INTO {table_name} ({', '.join(keys)}) VALUES ({placeholders})"
                cur.executemany(query, values)
            else:
                # Handle single record insert
                keys = data.keys()
                values = tuple(data.values())
                placeholders = ', '.join(['%s'] * len(keys))
                query = f"INSERT INTO {table_name} ({', '.join(keys)}) VALUES ({placeholders})"
                cur.execute(query, values)
            
            conn.commit()
            cur.close()
            conn.close()
        except Exception as e:
            raise Exception(f"Error saving data: {e}")

    def fetch_data(self, table_name, filters=None):
        """Fetch data from the specified table with optional filters."""
        try:
            conn = get_db_connection()
            cur = conn.cursor(cursor_factory=RealDictCursor)

            base_query = f"SELECT * FROM {table_name}"
            print(base_query)
            conditions = []
            values = []

            if filters:
                for column, value in filters.items():
                    conditions.append(f"{column} = %s")
                    values.append(value)

            if conditions:
                base_query += " WHERE " + " AND ".join(conditions)

            cur.execute(base_query, values)
            rows = cur.fetchall()

            cur.close()
            conn.close()
            print(rows)
            return rows
        except Exception as e:
            raise Exception(f"Error fetching data: {e}")

def run(server_class=HTTPServer, handler_class=RequestHandler, port=443):
    """Run the HTTP server."""
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting HTTP server on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
