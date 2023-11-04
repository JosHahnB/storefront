import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import categorySlice from '../../store/categorySlice';

const Category = ({ category }) => {
  const categories = useSelector((state) => state.category.categories);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(categorySlice.actions.setCategory(e.target.value));
  };

  return (
    <div style={{ width: '250px', padding: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="select-category-label">sort</InputLabel>
        <Select
          labelId="select-category-label"
          id="selected-category"
          value={selectedCategory}
          label="Cate"
          onChange={handleChange}

          // "categories": [
          //   {
          //     "name": "electronics",
          //     "displayName": "Electronics",
          //     "_id": 1
        >
          {/* <MenuItem value={'all'}>All</MenuItem> */}
          {categories.map((c) => (
            <MenuItem key={c.name} value={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Category;
