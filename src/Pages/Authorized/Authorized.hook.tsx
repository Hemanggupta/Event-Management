import { useContext } from 'react';
import { MobileContext } from './Authorized';

//Custom Hook
const useMobileContext = () => useContext(MobileContext);
export default useMobileContext;
