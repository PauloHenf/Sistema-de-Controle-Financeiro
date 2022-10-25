import React from 'react'
import ResumeItem from '../ResumeItem';
import * as C from './styles';
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const Resume = ({ income, expense, total }) => {
  return (

    <C.Container> 
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} color="green" value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} color="red" value={expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} color="green" value={total} />  
    </C.Container>

  );
};

export default Resume;