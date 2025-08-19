function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center py-5 border-t-indigo-500/10">
      <small lang="en" className="text-indigo-800">Copyright al Resesrved. &copy; {currentYear}</small>
    </footer>
  );
}
export default Footer;
