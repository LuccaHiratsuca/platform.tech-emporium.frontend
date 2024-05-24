import { Routes, Route } from 'react-router-dom';

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default UserRoutes;