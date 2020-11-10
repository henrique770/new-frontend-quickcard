export default function DeckInfo(args) {
    this.Id = args._id
    this.Name = args.name
    this.Count = args.count
    this.CountReviewed = args.isReviewed
    this.CountNotReviewed = args.isNotReviewed
    this.CardsReviewMoment = args.isCardsReviewMoment
    this.IsActive = args.isActive
}