import { APP_NAME } from '../../utils/constants';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} {APP_NAME}. All rights reserved.
        </p>
        <p>Built with React, Tailwind CSS, Express, Prisma &amp; PostgreSQL</p>
      </div>
    </footer>
  );
}

export default Footer;