const posts = [
  {
    id: 1,
    read: true
  },
  {
    id: 2,
    read: true
  },
  {
    id: 3,
    read: false
  },
];

function hasUnread(items) {
    return items.some(element => element.read == false);
}

const notify = hasUnread(posts);

console.log(notify);
