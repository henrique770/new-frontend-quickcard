import CardEntity from '~/entities/CardEntity';
import NoteEntity from '~/entities/NoteEntity';

const mapperDeck = function (deck) {
  return {
    Id /** ****** */: deck._id,
    IsActive /**/: deck.isActive,
    Name /** *** */: deck.name,
    Cards /** ** */: Array.isArray(deck.card)
      ? deck.card.map((card) => new CardEntity(mapperCard(card)))
      : [],
  };
};
export { mapperDeck };

const mapperCard = function (card) {
  return {
    Id /** ***************** */: card._id,
    IsActive /** ********* */: card.isActive,
    IdDeck /** ********** */: card.deck,
    Front /** ************ */: card.front,
    Verse /** ************ */: card.verse,
    DateLastView /** ***** */: card.dateLastView,
    DateNextView /** ***** */: card.dateNextView,
    NumDifficultCount /***/: card.numDifficultCount,
    NumEasyCount /** ***** */: card.numEasyCount,
    NumGoodCount /** ***** */: card.numGoodCount,
    BaseHours /** ******** */: card.baseHours,
    CodEnumHit /** ******* */: card.codEnumHit,
    DisplayDeadline /** ** */: card.displayDeadline,
    IsReviewed /** ******* */: card.isReviewed,
  };
};

export { mapperCard };

const mapperNote = function (note) {
  return {
    Id /** ********* */: note._id,
    IdNotePad /***/: note.notePad,
    Title /** **** */: note.title,
    Content /** * */: note.content,
    IsActive /** * */: note.isActive,
  };
};

export { mapperNote };

const mapperNotPad = function (notePad) {
  return {
    Id /** ******* */: notePad._id,
    IsActive /**/: notePad.isActive,
    Name /** *** */: notePad.name,
    Notes /** ** */: Array.isArray(notePad.note)
      ? notePad.note.map((note) => new NoteEntity(mapperNote(note)))
      : [],
  };
};
export { mapperNotPad };
