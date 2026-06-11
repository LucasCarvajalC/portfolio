export default function TeamComponent({ name, role, photo }) {
  return (
    <div className="team-component">
      <img src={photo} alt={name} />
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  );
}