import PageSpinner from 'components/PageSpinner';
import { branch, renderComponent } from 'recompose';

const spinnerWhileLoading = loading => branch(loading, renderComponent(PageSpinner));

export default spinnerWhileLoading;
