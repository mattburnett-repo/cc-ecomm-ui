import ProductDetailDisplay from '../../components/product/ProductDetailDisplay'

export default function ProductDetail (props) {
    // data should come from API / Redux
    
    const mockData = {
                        "id": 2,
                        "category_id": 2,
                        "name": "product_name_02",
                        "description": "product_desc_02",
                        "image_url": "http://www.image.com/item/2",
                        "price": "2.00"
                    };

    return <ProductDetailDisplay data={mockData} />
}