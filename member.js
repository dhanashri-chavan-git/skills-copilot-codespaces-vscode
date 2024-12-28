function skillsMember(
    member,
    skills,
    skillLevel,
    skillType,
    skillName,
    skillDescription
    ) {
    member.skills.push({
        level: skillLevel,
        type: skillType,
        name: skillName,
        description: skillDescription,
    });
    }





