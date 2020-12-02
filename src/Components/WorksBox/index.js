import {
  WorksBoxWrapper,
  WorksBoxContent,
  WorksBoxIcon,
  WorksBoxTitle,
  WorksBoxText,
} from './styles';

function WorksBox({ icon, title, text }) {
  return (
    <WorksBoxWrapper>
      <WorksBoxContent>
        <WorksBoxIcon>{ icon }</WorksBoxIcon>
        <WorksBoxTitle>{ title }</WorksBoxTitle>
        <WorksBoxText>{ text }</WorksBoxText>
      </WorksBoxContent>
    </WorksBoxWrapper>
  );
}

export default WorksBox;
