const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-8 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <p className="text-sm">Steel solutions for modern infrastructure...</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            {/* etc */}
          </ul>
        </div>
        {/* Other footer sections */}
      </div>
    </footer>
  );
};

export default Footer;
