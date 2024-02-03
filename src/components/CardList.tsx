import { Skill } from "../types/SkillType";
import Card from "./Card";
import "../styles/component.css";

interface Props {
  skills: Skill[];
}

export default function CardList({ skills }: Props) {
  return (
    <div className="card-list">
      {skills.map((skill) => (
        <Card skill={skill} />
      ))}
    </div>
  );
}
