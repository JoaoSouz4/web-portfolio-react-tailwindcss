import { CardAction } from './CardAction';
import { CardActions } from './CardActions';
import { CardDescription } from './CardDescription';
import { CardImage } from './CardImage';
import { CardRoot } from './CardRoot';
import { CardStacks } from './CardStacks';
import { CardTitle } from './CardTitle';

const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription,
  Image: CardImage,
  Actions: CardActions,
  Action: CardAction,
  Stacks: CardStacks,
};

export default Card;
