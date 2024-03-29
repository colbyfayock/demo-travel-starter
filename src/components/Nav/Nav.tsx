import Link from 'next/link';
import { Plane, Github } from 'lucide-react';

import Container from '@/components/Container';

const Nav = () => {
  return (
    <nav>
      <Container className="grid grid-cols-2 py-12">
        <p className="flex align-center">
          <Link href="/" className="flex gap-3 items-center text-2xl font-bold text-slate-900 dark:text-white hover:text-slate-900 dark:hover:text-gray-100">
            <Plane className="w-8 h-8" /> Travel Pilot
          </Link>
        </p>
        <ul className="flex justify-end align-center">
          <li>
            <Link className="flex h-full items-center gap-2" href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              GitHub
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Nav;