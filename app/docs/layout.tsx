import { Navigation } from '../components/Navigation';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen'>
      <Navigation />
      <main className='flex-1 p-8 bg-gray-50'>
        <div className='max-w-4xl mx-auto'>{children}</div>
      </main>
    </div>
  );
}
