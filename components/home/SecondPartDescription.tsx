"use client";
const SecondPartDescription = ({title}: {title: string}) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-lg text-white">
        The AI-driven lights illuminate the room, casting a warm and inviting
        glow that enhances the ambiance. These intelligent lights adjust their
        brightness and color temperature based on the time of day and the
        activity in the room, creating a personalized lighting experience that
        adapts to your needs.
      </p>
    </div>
  );
};

export default SecondPartDescription;
