import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ButtonColor, COLOR, PADDING} from 'src/constants/theme';
import {StyledButton} from 'src/components';

type Props = {
  editLabel: string;
  deleteLabel: string;
  onEdit: () => void;
  onDelete: () => void;
};

const CardFooter = React.memo(
  ({editLabel, deleteLabel, onEdit, onDelete}: Props) => (
    <View style={s.container}>
      <View style={s.buttonWrapper}>
        <StyledButton
          text={editLabel}
          onPress={onEdit}
          color={ButtonColor.Green}
          solid
          small
        />
      </View>
      <View style={s.buttonWrapper}>
        <StyledButton
          text={deleteLabel}
          onPress={onDelete}
          color={ButtonColor.Red}
          solid
          small
        />
      </View>
    </View>
  ),
);

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR.GRAY3,
    paddingVertical: PADDING.SMALL,
  },
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: PADDING.REGULAR,
  },
});

export default CardFooter;
