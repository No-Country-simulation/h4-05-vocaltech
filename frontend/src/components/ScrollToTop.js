import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = ({ step = false }) => {
  	const { pathname } = useLocation();

  	useEffect(() => {
    	if (!window.location.hash) {
			window.scrollTo(0, 0);
		}
  	}, [pathname, step]);

  	return null;
};
