/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StatusLogService } from "../statusLog.service";
import { StatusLogCreateInput } from "./StatusLogCreateInput";
import { StatusLog } from "./StatusLog";
import { StatusLogFindManyArgs } from "./StatusLogFindManyArgs";
import { StatusLogWhereUniqueInput } from "./StatusLogWhereUniqueInput";
import { StatusLogUpdateInput } from "./StatusLogUpdateInput";

export class StatusLogControllerBase {
  constructor(protected readonly service: StatusLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StatusLog })
  async createStatusLog(
    @common.Body() data: StatusLogCreateInput
  ): Promise<StatusLog> {
    return await this.service.createStatusLog({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StatusLog] })
  @ApiNestedQuery(StatusLogFindManyArgs)
  async statusLogs(@common.Req() request: Request): Promise<StatusLog[]> {
    const args = plainToClass(StatusLogFindManyArgs, request.query);
    return this.service.statusLogs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StatusLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async statusLog(
    @common.Param() params: StatusLogWhereUniqueInput
  ): Promise<StatusLog | null> {
    const result = await this.service.statusLog({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: StatusLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStatusLog(
    @common.Param() params: StatusLogWhereUniqueInput,
    @common.Body() data: StatusLogUpdateInput
  ): Promise<StatusLog | null> {
    try {
      return await this.service.updateStatusLog({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: StatusLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStatusLog(
    @common.Param() params: StatusLogWhereUniqueInput
  ): Promise<StatusLog | null> {
    try {
      return await this.service.deleteStatusLog({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
