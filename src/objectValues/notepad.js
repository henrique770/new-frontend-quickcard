export default function NotePadObj(args) {
  this.Id = args._id;
  this.NotePadName = args.notePadName;
  this.IsActive = args.isActive;
  this.Title = args.title;
  this.Name = args.name;
  this.Content = args.content;
  this.idStudent = args.idStudent;
}
