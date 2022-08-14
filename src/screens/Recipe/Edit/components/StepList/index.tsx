import React, {useState, useMemo} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RecipeStep} from 'src/services/api/types';
import {recipeActions} from 'src/store';
import {StyledText} from 'src/components';
import StepEditModal from '../StepEditModal';
import ListLayout from '../ListLayout';
import StepCard from './StepCard';
import {listStyles as s} from './styles';

type Props = {
  recipeSteps: RecipeStep[];
};

const StepList = React.memo(({recipeSteps}: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [showStepModal, setShowStepModal] = useState(false);
  const [stepForEdit, setStepForEdit] = useState<RecipeStep | null>(null);

  const sortedSteps = useMemo(
    () =>
      recipeSteps
        .slice()
        .sort((a, b) => (a.orderNumber > b.orderNumber ? 1 : -1)),
    [recipeSteps],
  );

  const handleStartAdding = () => {
    setStepForEdit(null);
    setShowStepModal(true);
  };

  const handleStartEditing = (currentStep: RecipeStep) => {
    setStepForEdit(() => {
      setShowStepModal(true);
      return currentStep;
    });
  };

  const handleSaveStep = (text: string, image: string) => {
    if (stepForEdit) {
      dispatch(
        recipeActions.changeStep({
          ...stepForEdit,
          text,
          image,
        }),
      );
    } else {
      dispatch(
        recipeActions.addStep({
          text,
          image,
        }),
      );
    }

    setStepForEdit(null);
    setShowStepModal(false);
  };

  const handleDeleteStep = (stepId: string) => {
    dispatch(recipeActions.deleteStep(stepId));
  };

  const handleCloseModal = () => {
    setStepForEdit(null);
    setShowStepModal(false);
  };

  const renderCard = (step: RecipeStep, index: number) => (
    <StepCard
      key={step.id}
      id={step.id}
      text={step.text}
      // TODO: Use step.orderNumber later
      orderNumber={index + 1}
      image={step.image ?? ''}
      onDelete={handleDeleteStep}
      onChangeStep={handleStartEditing}
      isLast={index === sortedSteps.length - 1}
    />
  );

  return (
    <>
      {showStepModal && (
        <StepEditModal
          initText={stepForEdit?.text}
          initImage={stepForEdit?.image ?? ''}
          onSave={handleSaveStep}
          onClose={handleCloseModal}
        />
      )}

      <ListLayout
        title={t('recipe.steps')}
        addItemText={t('recipe.addStep')}
        onAddItem={handleStartAdding}>
        {sortedSteps.length > 0 ? (
          sortedSteps.map(renderCard)
        ) : (
          <View style={s.emptyList}>
            <StyledText>{t('recipe.emptyStepList')}</StyledText>
          </View>
        )}
      </ListLayout>
    </>
  );
});

export default StepList;
