import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoutes from './User/index';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/*" element={<UserRoutes />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;