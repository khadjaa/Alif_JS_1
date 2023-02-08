const posts = [
  {
    id: 0,
    url: 'https://salom.alif.tj/partners/tobon',
    logoUrl: 'https://alif-skills.pro/media/tobon.svg',
    title: 'Тобон',
    category: 'Отопление',
    period: 12,
  },
  {
    id: 1,
    url: 'https://salom.alif.tj/partners/charme',
    logoUrl: 'https://alif-skills.pro/media/charme.svg',
    title: 'Charme',
    category: 'Женская одежда',
    period: 3,
  },
  {
    id: 2,
    url: 'https://salom.alif.tj/partners/akika',
    logoUrl: 'https://alif-skills.pro/media/akika.svg',
    title: 'Ақиқа',
    category: 'Ювелирные изделия',
    period: 6,
  },
  {
    id: 3,
    url: 'https://salom.alif.tj/partners/fosila',
    logoUrl: 'https://alif-skills.pro/media/fosila.svg',
    title: 'Fosila',
    category: 'Оргтехника',
    period: 24,
  },
];

function filterByThanos(items) {
    return items.filter((i, index) => index % 2 !== 0);
}

const filtered = filterByThanos(posts);

console.log(filtered);
