import {
  GetPublishings,
  SearchCategory,
  CreatePublishing,
  UpdatePublishing,
  DeletePublishing,
} from "../services/publishing.service";

export const usePublishingTable = () => {
  const loadData = async (page: number, size: number) => {
    const result = await GetPublishings(page, size);
    return result;
  };

  const deletePublishing = async (publishing: any) => {
    const result = await DeletePublishing(publishing);
    return result;
  };

  const creatPublishing = async (user: any) => {
    const result = await CreatePublishing(user);
    return result;
  };

  const updatePublishing = async (user: any) => {
    const result = await UpdatePublishing(user);
    return result;
  };

  const searchCategory = async (
    category: string,
    subcategory: string,
    product_name: string,
    brand: string,
    page: number,
    page_size: number
  ) => {
    const result = await SearchCategory(
      category,
      subcategory,
      product_name,
      brand,
      page,
      page_size
    );
    return result;
  };

  return {
    loadData,
    searchCategory,
    creatPublishing,
    updatePublishing,
    deletePublishing,
  };
};
