import Header from './base/Header/Header'
import Footer from './base/Footer/Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;