const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-4 items-center my-8">
      <div className="mt-10 mb-5">
        <div id="svg-animate">
          <svg height="40" width="80" viewBox="-20 -20 240 240">
            <path
              className="ring left"
              d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200"
              fill="none"
            />
            <path
              className="ring right"
              d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200"
            />
          </svg>
        </div>
      </div>
      <p className="text-base text-white">Conçu et réalisé par Mehdi Hattou.</p>
      <p className="text-base text-white">©Copyright 2024 - Mehdi Hattou</p>
    </footer>
  );
};

export default Footer;
