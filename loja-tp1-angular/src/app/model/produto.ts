const estados = ['novo', 'usado', 'esgotado'] as const

export interface Produto {
    id: number
    nome: string
    preco: number
    descricao: string
    imageUrl?: string
    promo?: boolean
    estado?: 'novo' | 'usado' | 'esgotado'
    categoria: string
}

export class ProdutoMapper {
    static fromJson(json: any) : Produto {
        let _estado = estados[Math.floor(Math.random() * estados.length)]
        return {
            id: json.id,
            nome: json.title,
            preco: json.price,
            descricao: json.description,
            imageUrl: json.image,
            estado: _estado,
            promo: json.id % 5 == 0 && _estado != 'esgotado',
            categoria: json.category
        }
    }

    static toJson(prod: Produto) : any {
        return {
            id: prod.id,
            title: prod.nome,
            price: prod.preco,
            description: prod.descricao,
            image: prod.imageUrl,
            category: prod.categoria
        }
    }
}
