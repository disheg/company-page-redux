const companies = [
  {
    id: 1,
    name: 'Acme Corp.',
    address: 'Ap #956-2714 Nunc Avenue',
    postalcode: '32956-036',
    city: 'Marchienne-au-Pont',
    country: 'Egypt',
  },
  {
    id: 2,
    name: 'Wayne Enterprises',
    address: 'P.O. Box 842, 1517 Dictum. Rd.',
    postalcode: '1089',
    city: 'Kawartha Lakes',
    country: 'Nauru',
  },
  {
    id: 3,
    name: 'Daily Bugle',
    address: '589 Auctor Street',
    postalcode: '31900',
    city: 'Ipswich',
    country: 'United Kingdom',
  },
];

const people = [
  {
    id: 1,
    name: 'Miriam Webster',
    photoUrl:
      'http://www.modny73.com/wp-content/uploads/2010/10/Female-Celebrity-Portrait-Drawings9.jpg',
    email: 'ligula@Nuncmaurissapien.co.uk',
    phone: '(037859) 619887',
    companyId: 1,
  },
  {
    id: 2,
    photoUrl:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtrLjhxZk0AbK7sS9BLVQJlHlJKHjpRrT_aH4i3TqCL2GT7Qw__A',
    name: 'Kessie Donovan',
    phone: '485-121-9975 x789',
    email: 'Etha@fern.net',
    companyId: 1,
  },
  {
    id: 3,
    photoUrl:
      'http://media-cache-ec0.pinimg.com/736x/85/e3/8a/85e38ab9e480790e216c4f9359bb677f.jpg',
    name: 'Lee Huff',
    phone: '1-569-468-5862 x640',
    email: 'Gunnar_Marks@spencer.biz',
    companyId: 1,
  },
  {
    id: 4,
    photoUrl: 'http://acufocal.com/wp-content/uploads/2014/01/1.jpg',
    name: 'Mira Gill',
    phone: '530.968.3220',
    email: 'Nathanael@judson.name',
    companyId: 1,
  },
  {
    id: 5,
    photoUrl:
      'http://iconolo.gy/sites/default/files/imagecache/h516/ishot-1Oldtime%20Start.jpg',
    name: 'Jeremy Bradley',
    phone: '(885)690-3320 x50890',
    email: 'Kiarra@kip.co.uk',
    companyId: 1,
  },
  {
    id: 6,
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqjbWicxkXG_Qzfy7bkwUibpwFf1cZ6rYfUg7j6zk2IqOKA03',
    name: 'Herman Ramirez',
    phone: '1-389-228-5054',
    email: 'Odell_Glover@immanuel.info',
    companyId: 1,
  },
  {
    id: 7,
    photoUrl:
      'http://1.bp.blogspot.com/-BVJTlQRF75U/TuMUcOb2HTI/AAAAAAAABRs/Ujx6Gqj_VFs/s1600/martin-schoeller-cate-blanchet-portrait-up-close-and-personal.jpg',
    name: 'Jade Webb',
    phone: '1-677-771-0513',
    email: 'Rosa_VonRueden@kadin.com',
    companyId: 2,
  },
  {
    id: 8,
    photoUrl: 'http://acidcow.com/pics/20101207/andrew_mcpherson_23.jpg',
    name: 'Cadman Henderson',
    phone: '1-603-867-9030',
    email: 'Jennifer_Rosenbaum@ramon.io',
    companyId: 2,
  },
  {
    id: 9,
    photoUrl:
      'http://www.perudo.co.uk/images/celebrity-portraits/STEPHENFRYBW.jpg',
    name: 'Colton Bernard',
    phone: '227-240-6560 x39187',
    email: 'Adelle_Stiedemann@rod.org',
    companyId: 2,
  },
  {
    id: 10,
    photoUrl:
      'http://www.inspirefirst.com/wp-content/uploads/2013/03/001-celebrity-portraiture-baldur-bragason.jpg',
    name: 'Eric Lloyd',
    phone: '(678)998-4063 x6587',
    email: 'Kallie@audra.org',
    companyId: 3,
  },
  {
    id: 11,
    photoUrl: 'http://i2.2photo.ru/medium/j/2/482203.jpg',
    name: 'Odysseus Sykes',
    phone: '(925)963-2963 x982',
    email: 'Kitty_Cummings@izaiah.io',
    companyId: 3,
  },
  {
    id: 12,
    photoUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDunvIvM3qMOw-fYKIh-caN2WudohvcXIOAewTqWdEqy7CRhFV',
    name: 'Sigourney Snider',
    phone: '607.874.9045',
    email: 'Diego.Hammes@isabel.org',
    companyId: 3,
  },
  {
    id: 13,
    photoUrl:
      'http://3.bp.blogspot.com/-5OlWa8qJ2FA/UeEQfg331QI/AAAAAAAAE7A/dt7Y-4Sr3ow/s1600/Fatboy+SLim+-+copie.jpg',
    name: 'Mohammad Wells',
    phone: '342.330.1927 x0355',
    email: 'Arne@norwood.io',
    companyId: 3,
  },
  {
    id: 14,
    photoUrl:
      'http://timethemoment.files.wordpress.com/2012/09/marlene_dietrich_1_1948.jpg?w=364',
    name: 'Rhea Merrill',
    phone: '(018)068-2028',
    email: 'Margarett_Hudson@cecile.io',
    companyId: 3,
  },
  {
    id: 15,
    photoUrl:
      'http://www.designskilz.com/wp-content/uploads/2013/05/Celebrity-portraits-by-Patrick-Swirc.jpg',
    name: 'Carly Phelps',
    phone: '1-113-329-8118',
    email: 'Lester_Mohr@alanis.info',
    companyId: 3,
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  companies,
  people,
};
