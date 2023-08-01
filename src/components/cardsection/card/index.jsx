import { Card, ImgCard, Divider } from "./styles";

function ComponentCard({ imgcard, title, lorem }) {
  return (
    <Card>
      <ImgCard>
        <img src={imgcard} />
      </ImgCard>
      <h1>{title}</h1>
      <Divider />
      <span>{lorem} </span>
      <button>TRY IT NOW</button>
    </Card>
  );
}

export default ComponentCard;
