/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BeachBarInterface extends ethers.utils.Interface {
  functions: {
    "claimOwnership()": FunctionFragment;
    "executeMixologistFn(address[],bytes[])": FunctionFragment;
    "feeTo()": FunctionFragment;
    "feeVeTap()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "registerAsset(address,address,uint256)": FunctionFragment;
    "registerMasterContract(address,uint8)": FunctionFragment;
    "registerMixologist(address,bytes,bool)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setFeeVeTap(address)": FunctionFragment;
    "setSwapper(address,bool)": FunctionFragment;
    "swappers(address)": FunctionFragment;
    "tapAssetId()": FunctionFragment;
    "tapToken()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "withdrawAllProtocolFees(address[])": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeMixologistFn",
    values: [string[], BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeVeTap", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerAsset",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerMasterContract",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerMixologist",
    values: [string, BytesLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(functionFragment: "setFeeVeTap", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSwapper",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "swappers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tapAssetId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tapToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllProtocolFees",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMixologistFn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeVeTap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerMasterContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerMixologist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeVeTap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSwapper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swappers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tapAssetId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tapToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllProtocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class BeachBar extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BeachBarInterface;

  functions: {
    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMixologistFn(
      mc: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "executeMixologistFn(address[],bytes[])"(
      mc: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    "feeTo()"(overrides?: CallOverrides): Promise<[string]>;

    feeVeTap(overrides?: CallOverrides): Promise<[string]>;

    "feeVeTap()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    registerAsset(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerAsset(address,address,uint256)"(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerMasterContract(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerMasterContract(address,uint8)"(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerMixologist(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerMixologist(address,bytes,bool)"(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      feeTo_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeTo(address)"(
      feeTo_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeVeTap(
      feeVeTap_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeVeTap(address)"(
      feeVeTap_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSwapper(
      swapper: string,
      enable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setSwapper(address,bool)"(
      swapper: string,
      enable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swappers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "swappers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tapAssetId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tapAssetId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tapToken(overrides?: CallOverrides): Promise<[string]>;

    "tapToken()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAllProtocolFees(
      swappers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawAllProtocolFees(address[])"(
      swappers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;

    "yieldBox()"(overrides?: CallOverrides): Promise<[string]>;
  };

  claimOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMixologistFn(
    mc: string[],
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "executeMixologistFn(address[],bytes[])"(
    mc: string[],
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  "feeTo()"(overrides?: CallOverrides): Promise<string>;

  feeVeTap(overrides?: CallOverrides): Promise<string>;

  "feeVeTap()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  registerAsset(
    contractAddress: string,
    strategy: string,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerAsset(address,address,uint256)"(
    contractAddress: string,
    strategy: string,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerMasterContract(
    mcAddress: string,
    contractType_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerMasterContract(address,uint8)"(
    mcAddress: string,
    contractType_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerMixologist(
    mc: string,
    data: BytesLike,
    useCreate2: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerMixologist(address,bytes,bool)"(
    mc: string,
    data: BytesLike,
    useCreate2: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    feeTo_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeTo(address)"(
    feeTo_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeVeTap(
    feeVeTap_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeVeTap(address)"(
    feeVeTap_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSwapper(
    swapper: string,
    enable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setSwapper(address,bool)"(
    swapper: string,
    enable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swappers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "swappers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tapAssetId(overrides?: CallOverrides): Promise<BigNumber>;

  "tapAssetId()"(overrides?: CallOverrides): Promise<BigNumber>;

  tapToken(overrides?: CallOverrides): Promise<string>;

  "tapToken()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAllProtocolFees(
    swappers_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawAllProtocolFees(address[])"(
    swappers_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  "yieldBox()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    executeMixologistFn(
      mc: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], string[]] & { success: boolean[]; result: string[] }
    >;

    "executeMixologistFn(address[],bytes[])"(
      mc: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], string[]] & { success: boolean[]; result: string[] }
    >;

    feeTo(overrides?: CallOverrides): Promise<string>;

    "feeTo()"(overrides?: CallOverrides): Promise<string>;

    feeVeTap(overrides?: CallOverrides): Promise<string>;

    "feeVeTap()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    registerAsset(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "registerAsset(address,address,uint256)"(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerMasterContract(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerMasterContract(address,uint8)"(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerMixologist(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerMixologist(address,bytes,bool)"(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(feeTo_: string, overrides?: CallOverrides): Promise<void>;

    "setFeeTo(address)"(
      feeTo_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeVeTap(feeVeTap_: string, overrides?: CallOverrides): Promise<void>;

    "setFeeVeTap(address)"(
      feeVeTap_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapper(
      swapper: string,
      enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSwapper(address,bool)"(
      swapper: string,
      enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    swappers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "swappers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tapAssetId(overrides?: CallOverrides): Promise<BigNumber>;

    "tapAssetId()"(overrides?: CallOverrides): Promise<BigNumber>;

    tapToken(overrides?: CallOverrides): Promise<string>;

    "tapToken()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAllProtocolFees(
      swappers_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawAllProtocolFees(address[])"(
      swappers_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    yieldBox(overrides?: CallOverrides): Promise<string>;

    "yieldBox()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMixologistFn(
      mc: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "executeMixologistFn(address[],bytes[])"(
      mc: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    "feeTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeVeTap(overrides?: CallOverrides): Promise<BigNumber>;

    "feeVeTap()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerAsset(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerAsset(address,address,uint256)"(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerMasterContract(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerMasterContract(address,uint8)"(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerMixologist(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerMixologist(address,bytes,bool)"(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      feeTo_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeTo(address)"(
      feeTo_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeVeTap(
      feeVeTap_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeVeTap(address)"(
      feeVeTap_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSwapper(
      swapper: string,
      enable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setSwapper(address,bool)"(
      swapper: string,
      enable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swappers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "swappers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tapAssetId(overrides?: CallOverrides): Promise<BigNumber>;

    "tapAssetId()"(overrides?: CallOverrides): Promise<BigNumber>;

    tapToken(overrides?: CallOverrides): Promise<BigNumber>;

    "tapToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAllProtocolFees(
      swappers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawAllProtocolFees(address[])"(
      swappers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;

    "yieldBox()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMixologistFn(
      mc: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "executeMixologistFn(address[],bytes[])"(
      mc: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeTo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeVeTap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeVeTap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerAsset(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerAsset(address,address,uint256)"(
      contractAddress: string,
      strategy: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerMasterContract(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerMasterContract(address,uint8)"(
      mcAddress: string,
      contractType_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerMixologist(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerMixologist(address,bytes,bool)"(
      mc: string,
      data: BytesLike,
      useCreate2: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      feeTo_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeTo(address)"(
      feeTo_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeVeTap(
      feeVeTap_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeVeTap(address)"(
      feeVeTap_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSwapper(
      swapper: string,
      enable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setSwapper(address,bool)"(
      swapper: string,
      enable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swappers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "swappers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tapAssetId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tapAssetId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tapToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tapToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAllProtocolFees(
      swappers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawAllProtocolFees(address[])"(
      swappers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yieldBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}