
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-white border-t mt-8 py-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} WeWantWaste. All rights reserved.
    </footer>
  );
}
