import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [];

  constructor() { }

  getItems() {
    this.items = [
      {id: 1, name:'Jordan 1 High (Red)', category: 'Shoes', price:'499', 
      shortDescription: 'Air Jordan is a line of basketball shoes and athletic apparel produced by American corporation Nike, Inc.', 
      longDescription: 'Air Jordan is a line of basketball shoes and athletic apparel produced by American corporation Nike, Inc. The first Air Jordan shoe was produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985. The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore.', img:'https://www.kicksonfire.com/wp-content/uploads/2018/02/Air-Jordan-1-Retro-High-OG-Bred-Toe-1-1.jpg?x57841'},
      
      {id: 2, name:'Iphone 15 Ultra Pro Max (Gold)', category: 'Gadgets', price:'2999', 
      shortDescription: 'The iPhone is a line of smartphones produced by Apple Inc. which uses Apple own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007.', 
      longDescription: 'The iPhone is a line of smartphones produced by Apple Inc. which uses Apple own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share', img:'https://itzone.com.vn/wp-content/uploads/2022/10/iphone-15-1664543780049419585259-1664610757213-166461075872649161420.jpeg'},
      
      {id: 3, name:'NVIDIA Tesla V100 Volta GPU Accelerator', category: 'Graphics Card', price:'8909', 
      shortDescription: 'The most advanced data center GPU ever built to accelerate AI, high performance computing (HPC), data science and graphics.', 
      longDescription: 'NVIDIA® Tesla® V100 Tensor Core is the most advanced data center GPU ever built to accelerate AI, high performance computing (HPC), data science and graphics. Its powered by NVIDIA Volta architecture, comes in 16 and 32GB configurations, and offers the performance of up to 100 CPUs in a single GPU. Data scientists, researchers, and engineers can now spend less time optimizing memory usage and more time designing the next AI breakthrough.', img:'https://m.media-amazon.com/images/I/71lqEOY2jjL._AC_SL1500_.jpg'},
      
      {id: 4, name:'Tesla Model 3', category: 'Electronic Cars', price:'99999', 
      shortDescription: 'Tesla is a company that designs and manufactures electric vehicles (EVs), renewable energy storage systems, and solar products.', 
      longDescription: 'Tesla is a company that designs and manufactures electric vehicles (EVs), renewable energy storage systems, and solar products. Founded in 2003, Teslas mission is to accelerate the worlds transition to sustainable energy. The companys electric cars are known for their high performance, long-range, and innovative features, such as Autopilot, a self-driving system. Tesla also produces energy storage products, such as the Powerwall and Powerpack, which store energy from solar panels or the grid for use when needed. Additionally, Tesla offers solar panels and solar roofs, which allow homeowners to generate their own clean energy.', img:'https://cdn.carbuzz.com/gallery-images/1600/431000/900/431913.jpg'}
    ];
    return this.items;
  }

  getItemID(id: any) {
    const product = this.items.find(x => x.id == id);
    return product;
  }
}
