import "../styles/home.css";
import importSkills from "../data/skills.json";
import { Skill } from "../types/SkillType";
import CardList from "../components/CardList";
import Header from "../components/ui/Header";

export default function Home() {
  const skills: Skill[] = importSkills.map((skillItem) => {
    return {
      title: skillItem.title,
      skill: skillItem.skill,
      note: skillItem.note,
      url: skillItem.url,
      level: skillItem.level,
    };
  });

  return (
    <div className="background">
      <Header />
      <CardList skills={skills} />
    </div>
  );
}
