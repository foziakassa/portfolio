import { flattenDeep } from "lodash-es";
import {
  CollectionQuery,
  DetailQuery,
  Filter,
  Order,
} from '../../models/collection-query.model';

export type apiType = "ps" | "strapi";
export const getKeyValue =
  <U extends keyof T, T extends object>(key: U) =>
  (obj: T) =>
    obj[key];
export const collectionQueryBuilder = (
  request: CollectionQuery,
  type: apiType = "ps"
) => {
  const params = new URLSearchParams();
  if (request?.skip !== undefined) {
    const skip = type === "strapi" ? "_start" : "skip";
    params?.set(skip, request.skip.toString());
  }

  if (request?.top !== undefined) {
    const top = type === "strapi" ? "_limit" : "top";
    params?.set(top, request.top.toString());
  }

  if (request?.locale !== undefined) {
    const locale = type === "strapi" ? "_limit" : "locale";
    params?.set(locale, request.locale.toString());
  }

  if (request?.search !== undefined) {
    params?.set("search", request.search.toString());
  }

  if (request?.searchFrom && request?.searchFrom?.length > 0) {
    request?.searchFrom?.forEach((searchFrom, index) => {
      // search from
      params?.append(`searchFrom[${index}]`, searchFrom.toString());
    });
  }

  if (request?.orderBy && request?.orderBy?.length > 0) {
    request?.orderBy?.forEach((orderBy, index) => {
      Object.keys(orderBy)?.forEach((key: any) => {
        const order = getKeyValue<keyof Order, Order>(key)(orderBy);
        if (order !== undefined) {
          params?.append(`orderBy[${index}][${key}]`, encodeURI(order));
        }
      });
    });
  }
  if (request?.groupBy && request?.groupBy?.length > 0) {
    request?.groupBy?.forEach((groupBy, index) => {
      params?.append(`groupBy[${index}]`, encodeURI(groupBy));
    });
  }
  if (request?.filter && request?.filter?.length > 0) {
    if (type === "strapi") {
      const flat = flattenDeep(request?.filter);
      const operators = {
        "=": "_eq",
      };
      flat?.forEach((r) => {
        const operator = getKeyValue<keyof Filter, Filter>("operator")(
          r
        ) as string;
        const f = `${r["field"]}${
          operators[operator as keyof typeof operators]
        }`;
        params?.append(f, r["value"]);
      });
    } else {
      request?.filter?.forEach((filterAnd, index) => {
        filterAnd.forEach((filterOr, orIndex) => {
          Object.keys(filterOr).forEach((key: any) => {
            const filter = getKeyValue<keyof Filter, Filter>(key)(filterOr);
            if (filter !== undefined) {
              params?.append(`filter[${index}][${orIndex}][${key}]`, filter);
            }
          });
        });
      });
    }
  }
  if (request?.select && request?.select?.length > 0) {
    request.select.forEach((select, index) => {
      params.append(`select[${index}]`, select);
    });
  }
  if (request?.includes && request.includes?.length > 0) {
    request.includes.forEach((include, index) => {
      params.append(`includes[${index}]`, include);
    });
  }
  if (request?.distinct && request.distinct?.length > 0) {
    request.distinct.forEach((include, index) => {
      params.append(`distinct[${index}]`, include);
    });
  }
  if (request?.count !== undefined) {
    params?.set("count", request?.count.toString());
  }

  if (request?.withArchived !== undefined && request?.withArchived) {
    params?.set("withArchived", request?.withArchived.toString());
  }

  return params;
};
export const findById = (id: any, locale: string | undefined) => {
  const request: DetailQuery = {
    filter: [
      [
        {
          field: "id",
          value: id,
          operator: "=",
        },
      ],
    ],
  };

  return collectionQueryBuilder(request);
};
