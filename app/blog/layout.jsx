export default function Bloglayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid black' }}>Sidebar</div>
      <div>{children}</div>
    </div>
  );
}
