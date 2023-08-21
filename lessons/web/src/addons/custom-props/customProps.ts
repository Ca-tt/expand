import { colorProps } from './colorProps';
import { sizeProps } from './sizeProps';
import { flexProps } from './flexProps';
import { fontProps } from './fontProps';
import { spaceProps } from './spaceProps';
import { positionProps } from './positionProps';

export let customProps = {
    ...colorProps,
    ...sizeProps,
    ...flexProps,
    ...fontProps,
    ...spaceProps,
    ...positionProps,
};
