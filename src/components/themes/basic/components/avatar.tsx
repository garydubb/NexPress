import Image from 'next/image';

//import types
import { PostAuthor } from '@/utils/type/author/author';

export default function Avatar({ author }: PostAuthor) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={author.node.avatar.url}
          width={50}
          height={50}
          priority
          className="rounded-full"
          alt={name ?? 'Profile Image'}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
