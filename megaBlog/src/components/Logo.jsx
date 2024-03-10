function Logo({ width = "w-10", height = "h-10" }) {
  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4576/4576683.png"
          alt="Logo"
          className={`${width} ${height}`}
        />
      </div>
    </div>
  );
}

export default Logo;
