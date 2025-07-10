import UserPage from "./pages/users/UserPage";

function Playground() {
  return (
    <div style={styles}>
      <UserPage />
    </div>
  );
}

export default Playground;

const styles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};
