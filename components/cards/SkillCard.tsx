import { Badge } from "@/components/ui/Badge";
import { Skill } from "@/types";

export function SkillCard({ skill }: { skill: Skill }) {
  return <Badge label={skill.name} color={skill.dotColor} />;
}
