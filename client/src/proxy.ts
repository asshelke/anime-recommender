const NEXT_PUBLIC_FLASK_BACKEND_PROXY_URL: string =
  process.env.NEXT_PUBLIC_FLASK_BACKEND_PROXY_URL || "http://localhost:8000";

export default NEXT_PUBLIC_FLASK_BACKEND_PROXY_URL;
