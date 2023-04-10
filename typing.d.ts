export interface Card {
  id: number
  name: string
  type: string
  desc: string
  atk: number|null
  def: number|null
  level: number|null
  race: string
  attribute: string|null
  card_images: [
    {
      image_url: string
      image_url_small: string
    }
  ]
}
