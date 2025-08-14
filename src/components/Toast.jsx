// Toast.jsx
export default function Toast({ message }) {
  return (
    <div className="fixed top-5 right-5 bg-coral text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in-out">
      {message}
    </div>
  );
}
