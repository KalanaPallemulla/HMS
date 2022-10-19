import types from "./types";

const initialState = {
  test: false,
  homeWelcomeImageText: "Hey! Welcome to Dream World",
  homeFacilitiesImageText: "We provide the best facilities for you",
  homeWelcomeText: "Welcome to Your Dream World!",
  homeDescriptionText: `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only
five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`,
  homeFacilitiesText: "We are providing...",
  homeFacilitiesDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`,
};

export default function homeReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case types.TEST_TYPE:
      return {
        ...state,
        test: true,
      };

    default:
      return state;
  }
}
