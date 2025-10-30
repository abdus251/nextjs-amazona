import { title } from 'process'

const data = {
  headerMenu: [
    {
      name: "Today's Deal",
      link: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      link: '/search?tag=new-arrivals',
    },
    {
      name: 'Featured Products',
      link: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      link: '/search?tag=best-sellers',
    },
    {
      name: 'Browsing History',
      link: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      link: '/page/customer-service',
    },
    {
      name: 'About Us',
      link: '/page/about-us',
    },
    {
      name: 'Help',
      link: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Most Popular Coconut Beauties ',
      buttonCaption: 'Shop Now',
      image: '/images/coconutbeauti.jpg',
      url: '/search?category=Coconut+Beauties',
      isPublished: true,
    },

    {
      title: 'Best Sellers in Jute Flowers ',
      buttonCaption: 'Shop Now',
      image: '/images/flowevase.jpg',
      url: '/search?category=Jute+Flowers',
      isPublished: true,
    },
    {
      title: 'Best Deals in Jute Butterflies ',
      buttonCaption: 'See More',
      image: '/images/butterfly.jpg',
      url: '/search?category=Jute+Butterflies',
      isPublished: true,
    },
  ],
}

export default data
