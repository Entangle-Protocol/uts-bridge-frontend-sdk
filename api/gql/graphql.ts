import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  _text: { input: any; output: any }
  bigint: { input: any; output: any }
  cctp_attestation_status: { input: any; output: any }
  coin: { input: any; output: any }
  dec_coin: { input: any; output: any }
  json: { input: any; output: any }
  jsonb: { input: any; output: any }
  numeric: { input: any; output: any }
  smallint: { input: any; output: any }
  timestamp: { input: any; output: any }
  timestamptz: { input: any; output: any }
  user_entangle_bridge_operation_type: { input: any; output: any }
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>
  _gt?: InputMaybe<Scalars['Boolean']['input']>
  _gte?: InputMaybe<Scalars['Boolean']['input']>
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Boolean']['input']>
  _lte?: InputMaybe<Scalars['Boolean']['input']>
  _neq?: InputMaybe<Scalars['Boolean']['input']>
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>
}

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>
  _gt?: InputMaybe<Scalars['Float']['input']>
  _gte?: InputMaybe<Scalars['Float']['input']>
  _in?: InputMaybe<Array<Scalars['Float']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Float']['input']>
  _lte?: InputMaybe<Scalars['Float']['input']>
  _neq?: InputMaybe<Scalars['Float']['input']>
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>
  _gt?: InputMaybe<Scalars['Int']['input']>
  _gte?: InputMaybe<Scalars['Int']['input']>
  _in?: InputMaybe<Array<Scalars['Int']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['Int']['input']>
  _lte?: InputMaybe<Scalars['Int']['input']>
  _neq?: InputMaybe<Scalars['Int']['input']>
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type SampleInput = {
  dst_chain_id: Scalars['numeric']['input']
  src_chain_id: Scalars['numeric']['input']
  tx_hash: Scalars['String']['input']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>
  _eq?: InputMaybe<Array<Scalars['String']['input']>>
  _gt?: InputMaybe<Array<Scalars['String']['input']>>
  _gte?: InputMaybe<Array<Scalars['String']['input']>>
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Array<Scalars['String']['input']>>
  _lte?: InputMaybe<Array<Scalars['String']['input']>>
  _neq?: InputMaybe<Array<Scalars['String']['input']>>
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>
}

export type UserInput = {
  account: Scalars['String']['input']
  name: Scalars['String']['input']
  network: Scalars['String']['input']
}

export type UserOutput = {
  __typename?: 'UserOutput'
  status?: Maybe<Scalars['String']['output']>
}

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account'
  address: Scalars['String']['output']
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>
  /** An array relationship */
  proposals: Array<Proposal>
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate
  /** An array relationship */
  validator_infos: Array<Validator_Info>
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>
  /** An array relationship */
  vesting_accounts: Array<Vesting_Account>
}

/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

/** columns and relationships of "account" */
export type AccountVesting_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>
  _not?: InputMaybe<Account_Bool_Exp>
  _or?: InputMaybe<Array<Account_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>
  proposals?: InputMaybe<Proposal_Bool_Exp>
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>
  vesting_accounts?: InputMaybe<Vesting_Account_Bool_Exp>
}

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: InputMaybe<Order_By>
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>
  vesting_account?: InputMaybe<Vesting_Account_Order_By>
  vesting_accounts_aggregate?: InputMaybe<Vesting_Account_Aggregate_Order_By>
}

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address',
}

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "agent" */
export type Agent = {
  __typename?: 'agent'
  agent_address: Scalars['String']['output']
  /** An object relationship */
  agent_info?: Maybe<Agent_Info>
  /** An object relationship */
  agent_name?: Maybe<Agent_Name>
  /** An array relationship */
  agent_protocol_supports: Array<Agent_Protocol_Support>
  /** An aggregate relationship */
  agent_protocol_supports_aggregate: Agent_Protocol_Support_Aggregate
  banned: Scalars['Boolean']['output']
  created_at: Scalars['timestamp']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  operation_count_total?: Maybe<Operation_Total_Count_Agent_Address>
  /** An object relationship */
  operations_count?: Maybe<Operation_Count_Agent_Address>
  paused: Scalars['Boolean']['output']
  reward_address: Scalars['String']['output']
}

/** columns and relationships of "agent" */
export type AgentAgent_Protocol_SupportsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

/** columns and relationships of "agent" */
export type AgentAgent_Protocol_Supports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

/** aggregated selection of "agent" */
export type Agent_Aggregate = {
  __typename?: 'agent_aggregate'
  aggregate?: Maybe<Agent_Aggregate_Fields>
  nodes: Array<Agent>
}

/** aggregate fields of "agent" */
export type Agent_Aggregate_Fields = {
  __typename?: 'agent_aggregate_fields'
  avg?: Maybe<Agent_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Agent_Max_Fields>
  min?: Maybe<Agent_Min_Fields>
  stddev?: Maybe<Agent_Stddev_Fields>
  stddev_pop?: Maybe<Agent_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Agent_Stddev_Samp_Fields>
  sum?: Maybe<Agent_Sum_Fields>
  var_pop?: Maybe<Agent_Var_Pop_Fields>
  var_samp?: Maybe<Agent_Var_Samp_Fields>
  variance?: Maybe<Agent_Variance_Fields>
}

/** aggregate fields of "agent" */
export type Agent_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Agent_Avg_Fields = {
  __typename?: 'agent_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "agent". All fields are combined with a logical 'AND'. */
export type Agent_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Bool_Exp>>
  _not?: InputMaybe<Agent_Bool_Exp>
  _or?: InputMaybe<Array<Agent_Bool_Exp>>
  agent_address?: InputMaybe<String_Comparison_Exp>
  agent_info?: InputMaybe<Agent_Info_Bool_Exp>
  agent_name?: InputMaybe<Agent_Name_Bool_Exp>
  agent_protocol_supports?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
  agent_protocol_supports_aggregate?: InputMaybe<Agent_Protocol_Support_Aggregate_Bool_Exp>
  banned?: InputMaybe<Boolean_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  operation_count_total?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
  operations_count?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
  paused?: InputMaybe<Boolean_Comparison_Exp>
  reward_address?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "agent_info" */
export type Agent_Info = {
  __typename?: 'agent_info'
  active_round_stake: Scalars['numeric']['output']
  address: Scalars['String']['output']
  /** An object relationship */
  agent?: Maybe<Agent>
  /** An array relationship */
  agent_info_delegators: Array<Agent_Info_Delegator>
  /** An aggregate relationship */
  agent_info_delegators_aggregate: Agent_Info_Delegator_Aggregate
  /** An object relationship */
  agent_info_statistic?: Maybe<Agent_Info_Statistics>
  /** An array relationship */
  agent_info_statistics: Array<Agent_Info_Statistics>
  /** An aggregate relationship */
  agent_info_statistics_aggregate: Agent_Info_Statistics_Aggregate
  claimed_rewards: Scalars['numeric']['output']
  fee: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  next_round_fee: Scalars['numeric']['output']
  personal_stake: Scalars['numeric']['output']
  relatime_stake: Scalars['numeric']['output']
  unclaimed_rewards: Scalars['numeric']['output']
}

/** columns and relationships of "agent_info" */
export type Agent_InfoAgent_Info_DelegatorsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Delegator_Order_By>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

/** columns and relationships of "agent_info" */
export type Agent_InfoAgent_Info_Delegators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Delegator_Order_By>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

/** columns and relationships of "agent_info" */
export type Agent_InfoAgent_Info_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Statistics_Order_By>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

/** columns and relationships of "agent_info" */
export type Agent_InfoAgent_Info_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Statistics_Order_By>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

/** aggregated selection of "agent_info" */
export type Agent_Info_Aggregate = {
  __typename?: 'agent_info_aggregate'
  aggregate?: Maybe<Agent_Info_Aggregate_Fields>
  nodes: Array<Agent_Info>
}

/** aggregate fields of "agent_info" */
export type Agent_Info_Aggregate_Fields = {
  __typename?: 'agent_info_aggregate_fields'
  avg?: Maybe<Agent_Info_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Agent_Info_Max_Fields>
  min?: Maybe<Agent_Info_Min_Fields>
  stddev?: Maybe<Agent_Info_Stddev_Fields>
  stddev_pop?: Maybe<Agent_Info_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Agent_Info_Stddev_Samp_Fields>
  sum?: Maybe<Agent_Info_Sum_Fields>
  var_pop?: Maybe<Agent_Info_Var_Pop_Fields>
  var_samp?: Maybe<Agent_Info_Var_Samp_Fields>
  variance?: Maybe<Agent_Info_Variance_Fields>
}

/** aggregate fields of "agent_info" */
export type Agent_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Info_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Agent_Info_Avg_Fields = {
  __typename?: 'agent_info_avg_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "agent_info". All fields are combined with a logical 'AND'. */
export type Agent_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Info_Bool_Exp>>
  _not?: InputMaybe<Agent_Info_Bool_Exp>
  _or?: InputMaybe<Array<Agent_Info_Bool_Exp>>
  active_round_stake?: InputMaybe<Numeric_Comparison_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  agent?: InputMaybe<Agent_Bool_Exp>
  agent_info_delegators?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
  agent_info_delegators_aggregate?: InputMaybe<Agent_Info_Delegator_Aggregate_Bool_Exp>
  agent_info_statistic?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
  agent_info_statistics?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
  agent_info_statistics_aggregate?: InputMaybe<Agent_Info_Statistics_Aggregate_Bool_Exp>
  claimed_rewards?: InputMaybe<Numeric_Comparison_Exp>
  fee?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  next_round_fee?: InputMaybe<Numeric_Comparison_Exp>
  personal_stake?: InputMaybe<Numeric_Comparison_Exp>
  relatime_stake?: InputMaybe<Numeric_Comparison_Exp>
  unclaimed_rewards?: InputMaybe<Numeric_Comparison_Exp>
}

/** columns and relationships of "agent_info_delegator" */
export type Agent_Info_Delegator = {
  __typename?: 'agent_info_delegator'
  address: Scalars['String']['output']
  /** An object relationship */
  agent_info: Agent_Info
  agent_info_id: Scalars['Int']['output']
  claimed_rewards: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  last_claim_round: Scalars['numeric']['output']
  last_stake_unstake_round: Scalars['numeric']['output']
  stake: Scalars['numeric']['output']
  unclaimed_rewards: Scalars['numeric']['output']
}

/** aggregated selection of "agent_info_delegator" */
export type Agent_Info_Delegator_Aggregate = {
  __typename?: 'agent_info_delegator_aggregate'
  aggregate?: Maybe<Agent_Info_Delegator_Aggregate_Fields>
  nodes: Array<Agent_Info_Delegator>
}

export type Agent_Info_Delegator_Aggregate_Bool_Exp = {
  count?: InputMaybe<Agent_Info_Delegator_Aggregate_Bool_Exp_Count>
}

export type Agent_Info_Delegator_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "agent_info_delegator" */
export type Agent_Info_Delegator_Aggregate_Fields = {
  __typename?: 'agent_info_delegator_aggregate_fields'
  avg?: Maybe<Agent_Info_Delegator_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Agent_Info_Delegator_Max_Fields>
  min?: Maybe<Agent_Info_Delegator_Min_Fields>
  stddev?: Maybe<Agent_Info_Delegator_Stddev_Fields>
  stddev_pop?: Maybe<Agent_Info_Delegator_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Agent_Info_Delegator_Stddev_Samp_Fields>
  sum?: Maybe<Agent_Info_Delegator_Sum_Fields>
  var_pop?: Maybe<Agent_Info_Delegator_Var_Pop_Fields>
  var_samp?: Maybe<Agent_Info_Delegator_Var_Samp_Fields>
  variance?: Maybe<Agent_Info_Delegator_Variance_Fields>
}

/** aggregate fields of "agent_info_delegator" */
export type Agent_Info_Delegator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "agent_info_delegator" */
export type Agent_Info_Delegator_Aggregate_Order_By = {
  avg?: InputMaybe<Agent_Info_Delegator_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Agent_Info_Delegator_Max_Order_By>
  min?: InputMaybe<Agent_Info_Delegator_Min_Order_By>
  stddev?: InputMaybe<Agent_Info_Delegator_Stddev_Order_By>
  stddev_pop?: InputMaybe<Agent_Info_Delegator_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Agent_Info_Delegator_Stddev_Samp_Order_By>
  sum?: InputMaybe<Agent_Info_Delegator_Sum_Order_By>
  var_pop?: InputMaybe<Agent_Info_Delegator_Var_Pop_Order_By>
  var_samp?: InputMaybe<Agent_Info_Delegator_Var_Samp_Order_By>
  variance?: InputMaybe<Agent_Info_Delegator_Variance_Order_By>
}

/** aggregate avg on columns */
export type Agent_Info_Delegator_Avg_Fields = {
  __typename?: 'agent_info_delegator_avg_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Avg_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "agent_info_delegator". All fields are combined with a logical 'AND'. */
export type Agent_Info_Delegator_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Info_Delegator_Bool_Exp>>
  _not?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
  _or?: InputMaybe<Array<Agent_Info_Delegator_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  agent_info?: InputMaybe<Agent_Info_Bool_Exp>
  agent_info_id?: InputMaybe<Int_Comparison_Exp>
  claimed_rewards?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  last_claim_round?: InputMaybe<Numeric_Comparison_Exp>
  last_stake_unstake_round?: InputMaybe<Numeric_Comparison_Exp>
  stake?: InputMaybe<Numeric_Comparison_Exp>
  unclaimed_rewards?: InputMaybe<Numeric_Comparison_Exp>
}

/** aggregate max on columns */
export type Agent_Info_Delegator_Max_Fields = {
  __typename?: 'agent_info_delegator_max_fields'
  address?: Maybe<Scalars['String']['output']>
  agent_info_id?: Maybe<Scalars['Int']['output']>
  claimed_rewards?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  last_claim_round?: Maybe<Scalars['numeric']['output']>
  last_stake_unstake_round?: Maybe<Scalars['numeric']['output']>
  stake?: Maybe<Scalars['numeric']['output']>
  unclaimed_rewards?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Max_Order_By = {
  address?: InputMaybe<Order_By>
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Agent_Info_Delegator_Min_Fields = {
  __typename?: 'agent_info_delegator_min_fields'
  address?: Maybe<Scalars['String']['output']>
  agent_info_id?: Maybe<Scalars['Int']['output']>
  claimed_rewards?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  last_claim_round?: Maybe<Scalars['numeric']['output']>
  last_stake_unstake_round?: Maybe<Scalars['numeric']['output']>
  stake?: Maybe<Scalars['numeric']['output']>
  unclaimed_rewards?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Min_Order_By = {
  address?: InputMaybe<Order_By>
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "agent_info_delegator". */
export type Agent_Info_Delegator_Order_By = {
  address?: InputMaybe<Order_By>
  agent_info?: InputMaybe<Agent_Info_Order_By>
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** select columns of table "agent_info_delegator" */
export enum Agent_Info_Delegator_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AgentInfoId = 'agent_info_id',
  /** column name */
  ClaimedRewards = 'claimed_rewards',
  /** column name */
  Id = 'id',
  /** column name */
  LastClaimRound = 'last_claim_round',
  /** column name */
  LastStakeUnstakeRound = 'last_stake_unstake_round',
  /** column name */
  Stake = 'stake',
  /** column name */
  UnclaimedRewards = 'unclaimed_rewards',
}

/** aggregate stddev on columns */
export type Agent_Info_Delegator_Stddev_Fields = {
  __typename?: 'agent_info_delegator_stddev_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Stddev_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Agent_Info_Delegator_Stddev_Pop_Fields = {
  __typename?: 'agent_info_delegator_stddev_pop_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Stddev_Pop_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Agent_Info_Delegator_Stddev_Samp_Fields = {
  __typename?: 'agent_info_delegator_stddev_samp_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Stddev_Samp_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "agent_info_delegator" */
export type Agent_Info_Delegator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Info_Delegator_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Agent_Info_Delegator_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  agent_info_id?: InputMaybe<Scalars['Int']['input']>
  claimed_rewards?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  last_claim_round?: InputMaybe<Scalars['numeric']['input']>
  last_stake_unstake_round?: InputMaybe<Scalars['numeric']['input']>
  stake?: InputMaybe<Scalars['numeric']['input']>
  unclaimed_rewards?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Agent_Info_Delegator_Sum_Fields = {
  __typename?: 'agent_info_delegator_sum_fields'
  agent_info_id?: Maybe<Scalars['Int']['output']>
  claimed_rewards?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  last_claim_round?: Maybe<Scalars['numeric']['output']>
  last_stake_unstake_round?: Maybe<Scalars['numeric']['output']>
  stake?: Maybe<Scalars['numeric']['output']>
  unclaimed_rewards?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Sum_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Agent_Info_Delegator_Var_Pop_Fields = {
  __typename?: 'agent_info_delegator_var_pop_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Var_Pop_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Agent_Info_Delegator_Var_Samp_Fields = {
  __typename?: 'agent_info_delegator_var_samp_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Var_Samp_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Agent_Info_Delegator_Variance_Fields = {
  __typename?: 'agent_info_delegator_variance_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  last_claim_round?: Maybe<Scalars['Float']['output']>
  last_stake_unstake_round?: Maybe<Scalars['Float']['output']>
  stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "agent_info_delegator" */
export type Agent_Info_Delegator_Variance_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  last_claim_round?: InputMaybe<Order_By>
  last_stake_unstake_round?: InputMaybe<Order_By>
  stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** aggregate max on columns */
export type Agent_Info_Max_Fields = {
  __typename?: 'agent_info_max_fields'
  active_round_stake?: Maybe<Scalars['numeric']['output']>
  address?: Maybe<Scalars['String']['output']>
  claimed_rewards?: Maybe<Scalars['numeric']['output']>
  fee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  next_round_fee?: Maybe<Scalars['numeric']['output']>
  personal_stake?: Maybe<Scalars['numeric']['output']>
  relatime_stake?: Maybe<Scalars['numeric']['output']>
  unclaimed_rewards?: Maybe<Scalars['numeric']['output']>
}

/** aggregate min on columns */
export type Agent_Info_Min_Fields = {
  __typename?: 'agent_info_min_fields'
  active_round_stake?: Maybe<Scalars['numeric']['output']>
  address?: Maybe<Scalars['String']['output']>
  claimed_rewards?: Maybe<Scalars['numeric']['output']>
  fee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  next_round_fee?: Maybe<Scalars['numeric']['output']>
  personal_stake?: Maybe<Scalars['numeric']['output']>
  relatime_stake?: Maybe<Scalars['numeric']['output']>
  unclaimed_rewards?: Maybe<Scalars['numeric']['output']>
}

/** Ordering options when selecting data from "agent_info". */
export type Agent_Info_Order_By = {
  active_round_stake?: InputMaybe<Order_By>
  address?: InputMaybe<Order_By>
  agent?: InputMaybe<Agent_Order_By>
  agent_info_delegators_aggregate?: InputMaybe<Agent_Info_Delegator_Aggregate_Order_By>
  agent_info_statistic?: InputMaybe<Agent_Info_Statistics_Order_By>
  agent_info_statistics_aggregate?: InputMaybe<Agent_Info_Statistics_Aggregate_Order_By>
  claimed_rewards?: InputMaybe<Order_By>
  fee?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  next_round_fee?: InputMaybe<Order_By>
  personal_stake?: InputMaybe<Order_By>
  relatime_stake?: InputMaybe<Order_By>
  unclaimed_rewards?: InputMaybe<Order_By>
}

/** select columns of table "agent_info" */
export enum Agent_Info_Select_Column {
  /** column name */
  ActiveRoundStake = 'active_round_stake',
  /** column name */
  Address = 'address',
  /** column name */
  ClaimedRewards = 'claimed_rewards',
  /** column name */
  Fee = 'fee',
  /** column name */
  Id = 'id',
  /** column name */
  NextRoundFee = 'next_round_fee',
  /** column name */
  PersonalStake = 'personal_stake',
  /** column name */
  RelatimeStake = 'relatime_stake',
  /** column name */
  UnclaimedRewards = 'unclaimed_rewards',
}

/** columns and relationships of "agent_info_statistics" */
export type Agent_Info_Statistics = {
  __typename?: 'agent_info_statistics'
  /** An object relationship */
  agent_info: Agent_Info
  agent_info_id: Scalars['Int']['output']
  bets: Scalars['numeric']['output']
  betsamount: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  rewards: Scalars['numeric']['output']
  rewardsamount: Scalars['numeric']['output']
  unlockedamount: Scalars['numeric']['output']
}

/** aggregated selection of "agent_info_statistics" */
export type Agent_Info_Statistics_Aggregate = {
  __typename?: 'agent_info_statistics_aggregate'
  aggregate?: Maybe<Agent_Info_Statistics_Aggregate_Fields>
  nodes: Array<Agent_Info_Statistics>
}

export type Agent_Info_Statistics_Aggregate_Bool_Exp = {
  count?: InputMaybe<Agent_Info_Statistics_Aggregate_Bool_Exp_Count>
}

export type Agent_Info_Statistics_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "agent_info_statistics" */
export type Agent_Info_Statistics_Aggregate_Fields = {
  __typename?: 'agent_info_statistics_aggregate_fields'
  avg?: Maybe<Agent_Info_Statistics_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Agent_Info_Statistics_Max_Fields>
  min?: Maybe<Agent_Info_Statistics_Min_Fields>
  stddev?: Maybe<Agent_Info_Statistics_Stddev_Fields>
  stddev_pop?: Maybe<Agent_Info_Statistics_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Agent_Info_Statistics_Stddev_Samp_Fields>
  sum?: Maybe<Agent_Info_Statistics_Sum_Fields>
  var_pop?: Maybe<Agent_Info_Statistics_Var_Pop_Fields>
  var_samp?: Maybe<Agent_Info_Statistics_Var_Samp_Fields>
  variance?: Maybe<Agent_Info_Statistics_Variance_Fields>
}

/** aggregate fields of "agent_info_statistics" */
export type Agent_Info_Statistics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "agent_info_statistics" */
export type Agent_Info_Statistics_Aggregate_Order_By = {
  avg?: InputMaybe<Agent_Info_Statistics_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Agent_Info_Statistics_Max_Order_By>
  min?: InputMaybe<Agent_Info_Statistics_Min_Order_By>
  stddev?: InputMaybe<Agent_Info_Statistics_Stddev_Order_By>
  stddev_pop?: InputMaybe<Agent_Info_Statistics_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Agent_Info_Statistics_Stddev_Samp_Order_By>
  sum?: InputMaybe<Agent_Info_Statistics_Sum_Order_By>
  var_pop?: InputMaybe<Agent_Info_Statistics_Var_Pop_Order_By>
  var_samp?: InputMaybe<Agent_Info_Statistics_Var_Samp_Order_By>
  variance?: InputMaybe<Agent_Info_Statistics_Variance_Order_By>
}

/** aggregate avg on columns */
export type Agent_Info_Statistics_Avg_Fields = {
  __typename?: 'agent_info_statistics_avg_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Avg_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "agent_info_statistics". All fields are combined with a logical 'AND'. */
export type Agent_Info_Statistics_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Info_Statistics_Bool_Exp>>
  _not?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
  _or?: InputMaybe<Array<Agent_Info_Statistics_Bool_Exp>>
  agent_info?: InputMaybe<Agent_Info_Bool_Exp>
  agent_info_id?: InputMaybe<Int_Comparison_Exp>
  bets?: InputMaybe<Numeric_Comparison_Exp>
  betsamount?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  rewards?: InputMaybe<Numeric_Comparison_Exp>
  rewardsamount?: InputMaybe<Numeric_Comparison_Exp>
  unlockedamount?: InputMaybe<Numeric_Comparison_Exp>
}

/** aggregate max on columns */
export type Agent_Info_Statistics_Max_Fields = {
  __typename?: 'agent_info_statistics_max_fields'
  agent_info_id?: Maybe<Scalars['Int']['output']>
  bets?: Maybe<Scalars['numeric']['output']>
  betsamount?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  rewards?: Maybe<Scalars['numeric']['output']>
  rewardsamount?: Maybe<Scalars['numeric']['output']>
  unlockedamount?: Maybe<Scalars['numeric']['output']>
}

/** order by max() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Max_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Agent_Info_Statistics_Min_Fields = {
  __typename?: 'agent_info_statistics_min_fields'
  agent_info_id?: Maybe<Scalars['Int']['output']>
  bets?: Maybe<Scalars['numeric']['output']>
  betsamount?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  rewards?: Maybe<Scalars['numeric']['output']>
  rewardsamount?: Maybe<Scalars['numeric']['output']>
  unlockedamount?: Maybe<Scalars['numeric']['output']>
}

/** order by min() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Min_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "agent_info_statistics". */
export type Agent_Info_Statistics_Order_By = {
  agent_info?: InputMaybe<Agent_Info_Order_By>
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** select columns of table "agent_info_statistics" */
export enum Agent_Info_Statistics_Select_Column {
  /** column name */
  AgentInfoId = 'agent_info_id',
  /** column name */
  Bets = 'bets',
  /** column name */
  Betsamount = 'betsamount',
  /** column name */
  Id = 'id',
  /** column name */
  Rewards = 'rewards',
  /** column name */
  Rewardsamount = 'rewardsamount',
  /** column name */
  Unlockedamount = 'unlockedamount',
}

/** aggregate stddev on columns */
export type Agent_Info_Statistics_Stddev_Fields = {
  __typename?: 'agent_info_statistics_stddev_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Stddev_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Agent_Info_Statistics_Stddev_Pop_Fields = {
  __typename?: 'agent_info_statistics_stddev_pop_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Stddev_Pop_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Agent_Info_Statistics_Stddev_Samp_Fields = {
  __typename?: 'agent_info_statistics_stddev_samp_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Stddev_Samp_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "agent_info_statistics" */
export type Agent_Info_Statistics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Info_Statistics_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Agent_Info_Statistics_Stream_Cursor_Value_Input = {
  agent_info_id?: InputMaybe<Scalars['Int']['input']>
  bets?: InputMaybe<Scalars['numeric']['input']>
  betsamount?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  rewards?: InputMaybe<Scalars['numeric']['input']>
  rewardsamount?: InputMaybe<Scalars['numeric']['input']>
  unlockedamount?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Agent_Info_Statistics_Sum_Fields = {
  __typename?: 'agent_info_statistics_sum_fields'
  agent_info_id?: Maybe<Scalars['Int']['output']>
  bets?: Maybe<Scalars['numeric']['output']>
  betsamount?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  rewards?: Maybe<Scalars['numeric']['output']>
  rewardsamount?: Maybe<Scalars['numeric']['output']>
  unlockedamount?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Sum_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Agent_Info_Statistics_Var_Pop_Fields = {
  __typename?: 'agent_info_statistics_var_pop_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Var_Pop_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Agent_Info_Statistics_Var_Samp_Fields = {
  __typename?: 'agent_info_statistics_var_samp_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Var_Samp_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Agent_Info_Statistics_Variance_Fields = {
  __typename?: 'agent_info_statistics_variance_fields'
  agent_info_id?: Maybe<Scalars['Float']['output']>
  bets?: Maybe<Scalars['Float']['output']>
  betsamount?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  rewards?: Maybe<Scalars['Float']['output']>
  rewardsamount?: Maybe<Scalars['Float']['output']>
  unlockedamount?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "agent_info_statistics" */
export type Agent_Info_Statistics_Variance_Order_By = {
  agent_info_id?: InputMaybe<Order_By>
  bets?: InputMaybe<Order_By>
  betsamount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  rewards?: InputMaybe<Order_By>
  rewardsamount?: InputMaybe<Order_By>
  unlockedamount?: InputMaybe<Order_By>
}

/** aggregate stddev on columns */
export type Agent_Info_Stddev_Fields = {
  __typename?: 'agent_info_stddev_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Agent_Info_Stddev_Pop_Fields = {
  __typename?: 'agent_info_stddev_pop_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Agent_Info_Stddev_Samp_Fields = {
  __typename?: 'agent_info_stddev_samp_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "agent_info" */
export type Agent_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Info_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Agent_Info_Stream_Cursor_Value_Input = {
  active_round_stake?: InputMaybe<Scalars['numeric']['input']>
  address?: InputMaybe<Scalars['String']['input']>
  claimed_rewards?: InputMaybe<Scalars['numeric']['input']>
  fee?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  next_round_fee?: InputMaybe<Scalars['numeric']['input']>
  personal_stake?: InputMaybe<Scalars['numeric']['input']>
  relatime_stake?: InputMaybe<Scalars['numeric']['input']>
  unclaimed_rewards?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Agent_Info_Sum_Fields = {
  __typename?: 'agent_info_sum_fields'
  active_round_stake?: Maybe<Scalars['numeric']['output']>
  claimed_rewards?: Maybe<Scalars['numeric']['output']>
  fee?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  next_round_fee?: Maybe<Scalars['numeric']['output']>
  personal_stake?: Maybe<Scalars['numeric']['output']>
  relatime_stake?: Maybe<Scalars['numeric']['output']>
  unclaimed_rewards?: Maybe<Scalars['numeric']['output']>
}

/** aggregate var_pop on columns */
export type Agent_Info_Var_Pop_Fields = {
  __typename?: 'agent_info_var_pop_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Agent_Info_Var_Samp_Fields = {
  __typename?: 'agent_info_var_samp_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Agent_Info_Variance_Fields = {
  __typename?: 'agent_info_variance_fields'
  active_round_stake?: Maybe<Scalars['Float']['output']>
  claimed_rewards?: Maybe<Scalars['Float']['output']>
  fee?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  next_round_fee?: Maybe<Scalars['Float']['output']>
  personal_stake?: Maybe<Scalars['Float']['output']>
  relatime_stake?: Maybe<Scalars['Float']['output']>
  unclaimed_rewards?: Maybe<Scalars['Float']['output']>
}

/** aggregate max on columns */
export type Agent_Max_Fields = {
  __typename?: 'agent_max_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  reward_address?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Agent_Min_Fields = {
  __typename?: 'agent_min_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  reward_address?: Maybe<Scalars['String']['output']>
}

/** columns and relationships of "agent_name" */
export type Agent_Name = {
  __typename?: 'agent_name'
  /** An object relationship */
  agent: Agent
  agent_address: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
}

/** aggregated selection of "agent_name" */
export type Agent_Name_Aggregate = {
  __typename?: 'agent_name_aggregate'
  aggregate?: Maybe<Agent_Name_Aggregate_Fields>
  nodes: Array<Agent_Name>
}

/** aggregate fields of "agent_name" */
export type Agent_Name_Aggregate_Fields = {
  __typename?: 'agent_name_aggregate_fields'
  avg?: Maybe<Agent_Name_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Agent_Name_Max_Fields>
  min?: Maybe<Agent_Name_Min_Fields>
  stddev?: Maybe<Agent_Name_Stddev_Fields>
  stddev_pop?: Maybe<Agent_Name_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Agent_Name_Stddev_Samp_Fields>
  sum?: Maybe<Agent_Name_Sum_Fields>
  var_pop?: Maybe<Agent_Name_Var_Pop_Fields>
  var_samp?: Maybe<Agent_Name_Var_Samp_Fields>
  variance?: Maybe<Agent_Name_Variance_Fields>
}

/** aggregate fields of "agent_name" */
export type Agent_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Name_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Agent_Name_Avg_Fields = {
  __typename?: 'agent_name_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "agent_name". All fields are combined with a logical 'AND'. */
export type Agent_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Name_Bool_Exp>>
  _not?: InputMaybe<Agent_Name_Bool_Exp>
  _or?: InputMaybe<Array<Agent_Name_Bool_Exp>>
  agent?: InputMaybe<Agent_Bool_Exp>
  agent_address?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Agent_Name_Max_Fields = {
  __typename?: 'agent_name_max_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Agent_Name_Min_Fields = {
  __typename?: 'agent_name_min_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "agent_name". */
export type Agent_Name_Order_By = {
  agent?: InputMaybe<Agent_Order_By>
  agent_address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** select columns of table "agent_name" */
export enum Agent_Name_Select_Column {
  /** column name */
  AgentAddress = 'agent_address',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate stddev on columns */
export type Agent_Name_Stddev_Fields = {
  __typename?: 'agent_name_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Agent_Name_Stddev_Pop_Fields = {
  __typename?: 'agent_name_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Agent_Name_Stddev_Samp_Fields = {
  __typename?: 'agent_name_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "agent_name" */
export type Agent_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Name_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Agent_Name_Stream_Cursor_Value_Input = {
  agent_address?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Agent_Name_Sum_Fields = {
  __typename?: 'agent_name_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Agent_Name_Var_Pop_Fields = {
  __typename?: 'agent_name_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Agent_Name_Var_Samp_Fields = {
  __typename?: 'agent_name_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Agent_Name_Variance_Fields = {
  __typename?: 'agent_name_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Ordering options when selecting data from "agent". */
export type Agent_Order_By = {
  agent_address?: InputMaybe<Order_By>
  agent_info?: InputMaybe<Agent_Info_Order_By>
  agent_name?: InputMaybe<Agent_Name_Order_By>
  agent_protocol_supports_aggregate?: InputMaybe<Agent_Protocol_Support_Aggregate_Order_By>
  banned?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  operation_count_total?: InputMaybe<Operation_Total_Count_Agent_Address_Order_By>
  operations_count?: InputMaybe<Operation_Count_Agent_Address_Order_By>
  paused?: InputMaybe<Order_By>
  reward_address?: InputMaybe<Order_By>
}

/** columns and relationships of "agent_protocol_support" */
export type Agent_Protocol_Support = {
  __typename?: 'agent_protocol_support'
  /** An object relationship */
  agent: Agent
  agent_address: Scalars['String']['output']
  /** An array relationship */
  bets: Array<Bets>
  /** An aggregate relationship */
  bets_aggregate: Bets_Aggregate
  created_at: Scalars['timestamp']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_id: Scalars['String']['output']
  removed: Scalars['Boolean']['output']
  /** An object relationship */
  success_message_count?: Maybe<Protocol_Transmitter_Success_Message_Count>
  transmitter: Scalars['String']['output']
}

/** columns and relationships of "agent_protocol_support" */
export type Agent_Protocol_SupportBetsArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

/** columns and relationships of "agent_protocol_support" */
export type Agent_Protocol_SupportBets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

/** aggregated selection of "agent_protocol_support" */
export type Agent_Protocol_Support_Aggregate = {
  __typename?: 'agent_protocol_support_aggregate'
  aggregate?: Maybe<Agent_Protocol_Support_Aggregate_Fields>
  nodes: Array<Agent_Protocol_Support>
}

export type Agent_Protocol_Support_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Agent_Protocol_Support_Aggregate_Bool_Exp_Count>
}

export type Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_And = {
  arguments: Agent_Protocol_Support_Select_Column_Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Agent_Protocol_Support_Select_Column_Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Agent_Protocol_Support_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "agent_protocol_support" */
export type Agent_Protocol_Support_Aggregate_Fields = {
  __typename?: 'agent_protocol_support_aggregate_fields'
  avg?: Maybe<Agent_Protocol_Support_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Agent_Protocol_Support_Max_Fields>
  min?: Maybe<Agent_Protocol_Support_Min_Fields>
  stddev?: Maybe<Agent_Protocol_Support_Stddev_Fields>
  stddev_pop?: Maybe<Agent_Protocol_Support_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Agent_Protocol_Support_Stddev_Samp_Fields>
  sum?: Maybe<Agent_Protocol_Support_Sum_Fields>
  var_pop?: Maybe<Agent_Protocol_Support_Var_Pop_Fields>
  var_samp?: Maybe<Agent_Protocol_Support_Var_Samp_Fields>
  variance?: Maybe<Agent_Protocol_Support_Variance_Fields>
}

/** aggregate fields of "agent_protocol_support" */
export type Agent_Protocol_Support_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "agent_protocol_support" */
export type Agent_Protocol_Support_Aggregate_Order_By = {
  avg?: InputMaybe<Agent_Protocol_Support_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Agent_Protocol_Support_Max_Order_By>
  min?: InputMaybe<Agent_Protocol_Support_Min_Order_By>
  stddev?: InputMaybe<Agent_Protocol_Support_Stddev_Order_By>
  stddev_pop?: InputMaybe<Agent_Protocol_Support_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Agent_Protocol_Support_Stddev_Samp_Order_By>
  sum?: InputMaybe<Agent_Protocol_Support_Sum_Order_By>
  var_pop?: InputMaybe<Agent_Protocol_Support_Var_Pop_Order_By>
  var_samp?: InputMaybe<Agent_Protocol_Support_Var_Samp_Order_By>
  variance?: InputMaybe<Agent_Protocol_Support_Variance_Order_By>
}

/** aggregate avg on columns */
export type Agent_Protocol_Support_Avg_Fields = {
  __typename?: 'agent_protocol_support_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Avg_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "agent_protocol_support". All fields are combined with a logical 'AND'. */
export type Agent_Protocol_Support_Bool_Exp = {
  _and?: InputMaybe<Array<Agent_Protocol_Support_Bool_Exp>>
  _not?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
  _or?: InputMaybe<Array<Agent_Protocol_Support_Bool_Exp>>
  agent?: InputMaybe<Agent_Bool_Exp>
  agent_address?: InputMaybe<String_Comparison_Exp>
  bets?: InputMaybe<Bets_Bool_Exp>
  bets_aggregate?: InputMaybe<Bets_Aggregate_Bool_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  removed?: InputMaybe<Boolean_Comparison_Exp>
  success_message_count?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
  transmitter?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Agent_Protocol_Support_Max_Fields = {
  __typename?: 'agent_protocol_support_max_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Max_Order_By = {
  agent_address?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Agent_Protocol_Support_Min_Fields = {
  __typename?: 'agent_protocol_support_min_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Min_Order_By = {
  agent_address?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "agent_protocol_support". */
export type Agent_Protocol_Support_Order_By = {
  agent?: InputMaybe<Agent_Order_By>
  agent_address?: InputMaybe<Order_By>
  bets_aggregate?: InputMaybe<Bets_Aggregate_Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_id?: InputMaybe<Order_By>
  removed?: InputMaybe<Order_By>
  success_message_count?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** select columns of table "agent_protocol_support" */
export enum Agent_Protocol_Support_Select_Column {
  /** column name */
  AgentAddress = 'agent_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Removed = 'removed',
  /** column name */
  Transmitter = 'transmitter',
}

/** select "agent_protocol_support_aggregate_bool_exp_bool_and_arguments_columns" columns of table "agent_protocol_support" */
export enum Agent_Protocol_Support_Select_Column_Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** select "agent_protocol_support_aggregate_bool_exp_bool_or_arguments_columns" columns of table "agent_protocol_support" */
export enum Agent_Protocol_Support_Select_Column_Agent_Protocol_Support_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** aggregate stddev on columns */
export type Agent_Protocol_Support_Stddev_Fields = {
  __typename?: 'agent_protocol_support_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Agent_Protocol_Support_Stddev_Pop_Fields = {
  __typename?: 'agent_protocol_support_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Agent_Protocol_Support_Stddev_Samp_Fields = {
  __typename?: 'agent_protocol_support_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "agent_protocol_support" */
export type Agent_Protocol_Support_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Protocol_Support_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Agent_Protocol_Support_Stream_Cursor_Value_Input = {
  agent_address?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  removed?: InputMaybe<Scalars['Boolean']['input']>
  transmitter?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Agent_Protocol_Support_Sum_Fields = {
  __typename?: 'agent_protocol_support_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Sum_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Agent_Protocol_Support_Var_Pop_Fields = {
  __typename?: 'agent_protocol_support_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Agent_Protocol_Support_Var_Samp_Fields = {
  __typename?: 'agent_protocol_support_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Agent_Protocol_Support_Variance_Fields = {
  __typename?: 'agent_protocol_support_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "agent_protocol_support" */
export type Agent_Protocol_Support_Variance_Order_By = {
  id?: InputMaybe<Order_By>
}

/** select columns of table "agent" */
export enum Agent_Select_Column {
  /** column name */
  AgentAddress = 'agent_address',
  /** column name */
  Banned = 'banned',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Paused = 'paused',
  /** column name */
  RewardAddress = 'reward_address',
}

/** aggregate stddev on columns */
export type Agent_Stddev_Fields = {
  __typename?: 'agent_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Agent_Stddev_Pop_Fields = {
  __typename?: 'agent_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Agent_Stddev_Samp_Fields = {
  __typename?: 'agent_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "agent" */
export type Agent_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Agent_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Agent_Stream_Cursor_Value_Input = {
  agent_address?: InputMaybe<Scalars['String']['input']>
  banned?: InputMaybe<Scalars['Boolean']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  paused?: InputMaybe<Scalars['Boolean']['input']>
  reward_address?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Agent_Sum_Fields = {
  __typename?: 'agent_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Agent_Var_Pop_Fields = {
  __typename?: 'agent_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Agent_Var_Samp_Fields = {
  __typename?: 'agent_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Agent_Variance_Fields = {
  __typename?: 'agent_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "assets_info" */
export type Assets_Info = {
  __typename?: 'assets_info'
  /** An array relationship */
  assets_source_originations: Array<Assets_Source_Originations>
  /** An aggregate relationship */
  assets_source_originations_aggregate: Assets_Source_Originations_Aggregate
  /** An object relationship */
  category?: Maybe<Category>
  category_id: Scalars['Int']['output']
  created_at: Scalars['timestamptz']['output']
  data_key: Scalars['String']['output']
  decimals: Scalars['Int']['output']
  float_digits: Scalars['Int']['output']
  fully_diluted_value?: Maybe<Scalars['bigint']['output']>
  icon_url: Scalars['String']['output']
  id: Scalars['bigint']['output']
  market_cap?: Maybe<Scalars['bigint']['output']>
  /** An array relationship */
  prices: Array<Prices>
  /** An aggregate relationship */
  prices_aggregate: Prices_Aggregate
  protocol_id: Scalars['String']['output']
  source_id: Scalars['String']['output']
  updated_at: Scalars['timestamptz']['output']
}

/** columns and relationships of "assets_info" */
export type Assets_InfoAssets_Source_OriginationsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

/** columns and relationships of "assets_info" */
export type Assets_InfoAssets_Source_Originations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

/** columns and relationships of "assets_info" */
export type Assets_InfoPricesArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

/** columns and relationships of "assets_info" */
export type Assets_InfoPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

/** aggregated selection of "assets_info" */
export type Assets_Info_Aggregate = {
  __typename?: 'assets_info_aggregate'
  aggregate?: Maybe<Assets_Info_Aggregate_Fields>
  nodes: Array<Assets_Info>
}

export type Assets_Info_Aggregate_Bool_Exp = {
  count?: InputMaybe<Assets_Info_Aggregate_Bool_Exp_Count>
}

export type Assets_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Assets_Info_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Assets_Info_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "assets_info" */
export type Assets_Info_Aggregate_Fields = {
  __typename?: 'assets_info_aggregate_fields'
  avg?: Maybe<Assets_Info_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Assets_Info_Max_Fields>
  min?: Maybe<Assets_Info_Min_Fields>
  stddev?: Maybe<Assets_Info_Stddev_Fields>
  stddev_pop?: Maybe<Assets_Info_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Assets_Info_Stddev_Samp_Fields>
  sum?: Maybe<Assets_Info_Sum_Fields>
  var_pop?: Maybe<Assets_Info_Var_Pop_Fields>
  var_samp?: Maybe<Assets_Info_Var_Samp_Fields>
  variance?: Maybe<Assets_Info_Variance_Fields>
}

/** aggregate fields of "assets_info" */
export type Assets_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assets_Info_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "assets_info" */
export type Assets_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Assets_Info_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Assets_Info_Max_Order_By>
  min?: InputMaybe<Assets_Info_Min_Order_By>
  stddev?: InputMaybe<Assets_Info_Stddev_Order_By>
  stddev_pop?: InputMaybe<Assets_Info_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Assets_Info_Stddev_Samp_Order_By>
  sum?: InputMaybe<Assets_Info_Sum_Order_By>
  var_pop?: InputMaybe<Assets_Info_Var_Pop_Order_By>
  var_samp?: InputMaybe<Assets_Info_Var_Samp_Order_By>
  variance?: InputMaybe<Assets_Info_Variance_Order_By>
}

/** aggregate avg on columns */
export type Assets_Info_Avg_Fields = {
  __typename?: 'assets_info_avg_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "assets_info" */
export type Assets_Info_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "assets_info". All fields are combined with a logical 'AND'. */
export type Assets_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Info_Bool_Exp>>
  _not?: InputMaybe<Assets_Info_Bool_Exp>
  _or?: InputMaybe<Array<Assets_Info_Bool_Exp>>
  assets_source_originations?: InputMaybe<Assets_Source_Originations_Bool_Exp>
  assets_source_originations_aggregate?: InputMaybe<Assets_Source_Originations_Aggregate_Bool_Exp>
  category?: InputMaybe<Category_Bool_Exp>
  category_id?: InputMaybe<Int_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  data_key?: InputMaybe<String_Comparison_Exp>
  decimals?: InputMaybe<Int_Comparison_Exp>
  float_digits?: InputMaybe<Int_Comparison_Exp>
  fully_diluted_value?: InputMaybe<Bigint_Comparison_Exp>
  icon_url?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Bigint_Comparison_Exp>
  market_cap?: InputMaybe<Bigint_Comparison_Exp>
  prices?: InputMaybe<Prices_Bool_Exp>
  prices_aggregate?: InputMaybe<Prices_Aggregate_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  source_id?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Assets_Info_Max_Fields = {
  __typename?: 'assets_info_max_fields'
  category_id?: Maybe<Scalars['Int']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  data_key?: Maybe<Scalars['String']['output']>
  decimals?: Maybe<Scalars['Int']['output']>
  float_digits?: Maybe<Scalars['Int']['output']>
  fully_diluted_value?: Maybe<Scalars['bigint']['output']>
  icon_url?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  market_cap?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  source_id?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by max() on columns of table "assets_info" */
export type Assets_Info_Max_Order_By = {
  category_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  data_key?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  icon_url?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  source_id?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Assets_Info_Min_Fields = {
  __typename?: 'assets_info_min_fields'
  category_id?: Maybe<Scalars['Int']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  data_key?: Maybe<Scalars['String']['output']>
  decimals?: Maybe<Scalars['Int']['output']>
  float_digits?: Maybe<Scalars['Int']['output']>
  fully_diluted_value?: Maybe<Scalars['bigint']['output']>
  icon_url?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  market_cap?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  source_id?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** order by min() on columns of table "assets_info" */
export type Assets_Info_Min_Order_By = {
  category_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  data_key?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  icon_url?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  source_id?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "assets_info". */
export type Assets_Info_Order_By = {
  assets_source_originations_aggregate?: InputMaybe<Assets_Source_Originations_Aggregate_Order_By>
  category?: InputMaybe<Category_Order_By>
  category_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  data_key?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  icon_url?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
  prices_aggregate?: InputMaybe<Prices_Aggregate_Order_By>
  protocol_id?: InputMaybe<Order_By>
  source_id?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** select columns of table "assets_info" */
export enum Assets_Info_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataKey = 'data_key',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  FloatDigits = 'float_digits',
  /** column name */
  FullyDilutedValue = 'fully_diluted_value',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  SourceId = 'source_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Assets_Info_Stddev_Fields = {
  __typename?: 'assets_info_stddev_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "assets_info" */
export type Assets_Info_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Assets_Info_Stddev_Pop_Fields = {
  __typename?: 'assets_info_stddev_pop_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "assets_info" */
export type Assets_Info_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Assets_Info_Stddev_Samp_Fields = {
  __typename?: 'assets_info_stddev_samp_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "assets_info" */
export type Assets_Info_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "assets_info" */
export type Assets_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Info_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Assets_Info_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  data_key?: InputMaybe<Scalars['String']['input']>
  decimals?: InputMaybe<Scalars['Int']['input']>
  float_digits?: InputMaybe<Scalars['Int']['input']>
  fully_diluted_value?: InputMaybe<Scalars['bigint']['input']>
  icon_url?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['bigint']['input']>
  market_cap?: InputMaybe<Scalars['bigint']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  source_id?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Assets_Info_Sum_Fields = {
  __typename?: 'assets_info_sum_fields'
  category_id?: Maybe<Scalars['Int']['output']>
  decimals?: Maybe<Scalars['Int']['output']>
  float_digits?: Maybe<Scalars['Int']['output']>
  fully_diluted_value?: Maybe<Scalars['bigint']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  market_cap?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "assets_info" */
export type Assets_Info_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Assets_Info_Var_Pop_Fields = {
  __typename?: 'assets_info_var_pop_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "assets_info" */
export type Assets_Info_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Assets_Info_Var_Samp_Fields = {
  __typename?: 'assets_info_var_samp_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "assets_info" */
export type Assets_Info_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Assets_Info_Variance_Fields = {
  __typename?: 'assets_info_variance_fields'
  category_id?: Maybe<Scalars['Float']['output']>
  decimals?: Maybe<Scalars['Float']['output']>
  float_digits?: Maybe<Scalars['Float']['output']>
  fully_diluted_value?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  market_cap?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "assets_info" */
export type Assets_Info_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>
  decimals?: InputMaybe<Order_By>
  float_digits?: InputMaybe<Order_By>
  fully_diluted_value?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  market_cap?: InputMaybe<Order_By>
}

/** columns and relationships of "assets_source_originations" */
export type Assets_Source_Originations = {
  __typename?: 'assets_source_originations'
  asset_id: Scalars['bigint']['output']
  /** An object relationship */
  assets_info: Assets_Info
  /** An object relationship */
  source_origination: Source_Origination
  source_origination_id: Scalars['bigint']['output']
}

/** aggregated selection of "assets_source_originations" */
export type Assets_Source_Originations_Aggregate = {
  __typename?: 'assets_source_originations_aggregate'
  aggregate?: Maybe<Assets_Source_Originations_Aggregate_Fields>
  nodes: Array<Assets_Source_Originations>
}

export type Assets_Source_Originations_Aggregate_Bool_Exp = {
  count?: InputMaybe<Assets_Source_Originations_Aggregate_Bool_Exp_Count>
}

export type Assets_Source_Originations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Assets_Source_Originations_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "assets_source_originations" */
export type Assets_Source_Originations_Aggregate_Fields = {
  __typename?: 'assets_source_originations_aggregate_fields'
  avg?: Maybe<Assets_Source_Originations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Assets_Source_Originations_Max_Fields>
  min?: Maybe<Assets_Source_Originations_Min_Fields>
  stddev?: Maybe<Assets_Source_Originations_Stddev_Fields>
  stddev_pop?: Maybe<Assets_Source_Originations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Assets_Source_Originations_Stddev_Samp_Fields>
  sum?: Maybe<Assets_Source_Originations_Sum_Fields>
  var_pop?: Maybe<Assets_Source_Originations_Var_Pop_Fields>
  var_samp?: Maybe<Assets_Source_Originations_Var_Samp_Fields>
  variance?: Maybe<Assets_Source_Originations_Variance_Fields>
}

/** aggregate fields of "assets_source_originations" */
export type Assets_Source_Originations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "assets_source_originations" */
export type Assets_Source_Originations_Aggregate_Order_By = {
  avg?: InputMaybe<Assets_Source_Originations_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Assets_Source_Originations_Max_Order_By>
  min?: InputMaybe<Assets_Source_Originations_Min_Order_By>
  stddev?: InputMaybe<Assets_Source_Originations_Stddev_Order_By>
  stddev_pop?: InputMaybe<Assets_Source_Originations_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Assets_Source_Originations_Stddev_Samp_Order_By>
  sum?: InputMaybe<Assets_Source_Originations_Sum_Order_By>
  var_pop?: InputMaybe<Assets_Source_Originations_Var_Pop_Order_By>
  var_samp?: InputMaybe<Assets_Source_Originations_Var_Samp_Order_By>
  variance?: InputMaybe<Assets_Source_Originations_Variance_Order_By>
}

/** aggregate avg on columns */
export type Assets_Source_Originations_Avg_Fields = {
  __typename?: 'assets_source_originations_avg_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Avg_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "assets_source_originations". All fields are combined with a logical 'AND'. */
export type Assets_Source_Originations_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Source_Originations_Bool_Exp>>
  _not?: InputMaybe<Assets_Source_Originations_Bool_Exp>
  _or?: InputMaybe<Array<Assets_Source_Originations_Bool_Exp>>
  asset_id?: InputMaybe<Bigint_Comparison_Exp>
  assets_info?: InputMaybe<Assets_Info_Bool_Exp>
  source_origination?: InputMaybe<Source_Origination_Bool_Exp>
  source_origination_id?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Assets_Source_Originations_Max_Fields = {
  __typename?: 'assets_source_originations_max_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
}

/** order by max() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Max_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Assets_Source_Originations_Min_Fields = {
  __typename?: 'assets_source_originations_min_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
}

/** order by min() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Min_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "assets_source_originations". */
export type Assets_Source_Originations_Order_By = {
  asset_id?: InputMaybe<Order_By>
  assets_info?: InputMaybe<Assets_Info_Order_By>
  source_origination?: InputMaybe<Source_Origination_Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** select columns of table "assets_source_originations" */
export enum Assets_Source_Originations_Select_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  SourceOriginationId = 'source_origination_id',
}

/** aggregate stddev on columns */
export type Assets_Source_Originations_Stddev_Fields = {
  __typename?: 'assets_source_originations_stddev_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Stddev_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Assets_Source_Originations_Stddev_Pop_Fields = {
  __typename?: 'assets_source_originations_stddev_pop_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Stddev_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Assets_Source_Originations_Stddev_Samp_Fields = {
  __typename?: 'assets_source_originations_stddev_samp_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Stddev_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "assets_source_originations" */
export type Assets_Source_Originations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Source_Originations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Assets_Source_Originations_Stream_Cursor_Value_Input = {
  asset_id?: InputMaybe<Scalars['bigint']['input']>
  source_origination_id?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Assets_Source_Originations_Sum_Fields = {
  __typename?: 'assets_source_originations_sum_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Sum_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Assets_Source_Originations_Var_Pop_Fields = {
  __typename?: 'assets_source_originations_var_pop_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Var_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Assets_Source_Originations_Var_Samp_Fields = {
  __typename?: 'assets_source_originations_var_samp_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Var_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Assets_Source_Originations_Variance_Fields = {
  __typename?: 'assets_source_originations_variance_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "assets_source_originations" */
export type Assets_Source_Originations_Variance_Order_By = {
  asset_id?: InputMaybe<Order_By>
  source_origination_id?: InputMaybe<Order_By>
}

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis'
  average_time: Scalars['numeric']['output']
  height: Scalars['bigint']['output']
}

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day'
  average_time: Scalars['numeric']['output']
  height: Scalars['bigint']['output']
}

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour'
  average_time: Scalars['numeric']['output']
  height: Scalars['bigint']['output']
}

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute'
  average_time: Scalars['numeric']['output']
  height: Scalars['bigint']['output']
}

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>
  average_time?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** columns and relationships of "bets" */
export type Bets = {
  __typename?: 'bets'
  id: Scalars['Int']['output']
  op_hash: Scalars['String']['output']
  /** An object relationship */
  operation: Operations
  /** An object relationship */
  protocol: Protocol
  protocol_id: Scalars['String']['output']
  round: Scalars['numeric']['output']
  transmitter_address: Scalars['String']['output']
}

/** aggregated selection of "bets" */
export type Bets_Aggregate = {
  __typename?: 'bets_aggregate'
  aggregate?: Maybe<Bets_Aggregate_Fields>
  nodes: Array<Bets>
}

export type Bets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bets_Aggregate_Bool_Exp_Count>
}

export type Bets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bets_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Bets_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "bets" */
export type Bets_Aggregate_Fields = {
  __typename?: 'bets_aggregate_fields'
  avg?: Maybe<Bets_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Bets_Max_Fields>
  min?: Maybe<Bets_Min_Fields>
  stddev?: Maybe<Bets_Stddev_Fields>
  stddev_pop?: Maybe<Bets_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bets_Stddev_Samp_Fields>
  sum?: Maybe<Bets_Sum_Fields>
  var_pop?: Maybe<Bets_Var_Pop_Fields>
  var_samp?: Maybe<Bets_Var_Samp_Fields>
  variance?: Maybe<Bets_Variance_Fields>
}

/** aggregate fields of "bets" */
export type Bets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bets_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "bets" */
export type Bets_Aggregate_Order_By = {
  avg?: InputMaybe<Bets_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Bets_Max_Order_By>
  min?: InputMaybe<Bets_Min_Order_By>
  stddev?: InputMaybe<Bets_Stddev_Order_By>
  stddev_pop?: InputMaybe<Bets_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Bets_Stddev_Samp_Order_By>
  sum?: InputMaybe<Bets_Sum_Order_By>
  var_pop?: InputMaybe<Bets_Var_Pop_Order_By>
  var_samp?: InputMaybe<Bets_Var_Samp_Order_By>
  variance?: InputMaybe<Bets_Variance_Order_By>
}

/** aggregate avg on columns */
export type Bets_Avg_Fields = {
  __typename?: 'bets_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "bets" */
export type Bets_Avg_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "bets". All fields are combined with a logical 'AND'. */
export type Bets_Bool_Exp = {
  _and?: InputMaybe<Array<Bets_Bool_Exp>>
  _not?: InputMaybe<Bets_Bool_Exp>
  _or?: InputMaybe<Array<Bets_Bool_Exp>>
  id?: InputMaybe<Int_Comparison_Exp>
  op_hash?: InputMaybe<String_Comparison_Exp>
  operation?: InputMaybe<Operations_Bool_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  round?: InputMaybe<Numeric_Comparison_Exp>
  transmitter_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Bets_Max_Fields = {
  __typename?: 'bets_max_fields'
  id?: Maybe<Scalars['Int']['output']>
  op_hash?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  round?: Maybe<Scalars['numeric']['output']>
  transmitter_address?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "bets" */
export type Bets_Max_Order_By = {
  id?: InputMaybe<Order_By>
  op_hash?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  transmitter_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Bets_Min_Fields = {
  __typename?: 'bets_min_fields'
  id?: Maybe<Scalars['Int']['output']>
  op_hash?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  round?: Maybe<Scalars['numeric']['output']>
  transmitter_address?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "bets" */
export type Bets_Min_Order_By = {
  id?: InputMaybe<Order_By>
  op_hash?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  transmitter_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "bets". */
export type Bets_Order_By = {
  id?: InputMaybe<Order_By>
  op_hash?: InputMaybe<Order_By>
  operation?: InputMaybe<Operations_Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  transmitter_address?: InputMaybe<Order_By>
}

/** select columns of table "bets" */
export enum Bets_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OpHash = 'op_hash',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Round = 'round',
  /** column name */
  TransmitterAddress = 'transmitter_address',
}

/** aggregate stddev on columns */
export type Bets_Stddev_Fields = {
  __typename?: 'bets_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "bets" */
export type Bets_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Bets_Stddev_Pop_Fields = {
  __typename?: 'bets_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "bets" */
export type Bets_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Bets_Stddev_Samp_Fields = {
  __typename?: 'bets_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "bets" */
export type Bets_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "bets" */
export type Bets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bets_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Bets_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>
  op_hash?: InputMaybe<Scalars['String']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  round?: InputMaybe<Scalars['numeric']['input']>
  transmitter_address?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Bets_Sum_Fields = {
  __typename?: 'bets_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
  round?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "bets" */
export type Bets_Sum_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Bets_Var_Pop_Fields = {
  __typename?: 'bets_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "bets" */
export type Bets_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Bets_Var_Samp_Fields = {
  __typename?: 'bets_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "bets" */
export type Bets_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Bets_Variance_Fields = {
  __typename?: 'bets_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "bets" */
export type Bets_Variance_Order_By = {
  id?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>
  _gt?: InputMaybe<Scalars['bigint']['input']>
  _gte?: InputMaybe<Scalars['bigint']['input']>
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['bigint']['input']>
  _lte?: InputMaybe<Scalars['bigint']['input']>
  _neq?: InputMaybe<Scalars['bigint']['input']>
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>
}

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block'
  hash: Scalars['String']['output']
  height: Scalars['bigint']['output']
  num_txs?: Maybe<Scalars['Int']['output']>
  /** An array relationship */
  pre_commits: Array<Pre_Commit>
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>
  proposer_address?: Maybe<Scalars['String']['output']>
  timestamp: Scalars['timestamp']['output']
  total_gas?: Maybe<Scalars['bigint']['output']>
  /** An array relationship */
  transactions: Array<Transaction>
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate
  /** An object relationship */
  validator?: Maybe<Validator>
  /** An array relationship */
  validator_delegations: Array<Validator_Delegations>
  /** An aggregate relationship */
  validator_delegations_aggregate: Validator_Delegations_Aggregate
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate
}

/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockValidator_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockValidator_Delegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Block_Max_Order_By>
  min?: InputMaybe<Block_Min_Order_By>
  stddev?: InputMaybe<Block_Stddev_Order_By>
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>
  sum?: InputMaybe<Block_Sum_Order_By>
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>
  variance?: InputMaybe<Block_Variance_Order_By>
}

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>
  _not?: InputMaybe<Block_Bool_Exp>
  _or?: InputMaybe<Array<Block_Bool_Exp>>
  hash?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  num_txs?: InputMaybe<Int_Comparison_Exp>
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>
  proposer_address?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  total_gas?: InputMaybe<Bigint_Comparison_Exp>
  transactions?: InputMaybe<Transaction_Bool_Exp>
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_delegations?: InputMaybe<Validator_Delegations_Bool_Exp>
  validator_delegations_aggregate?: InputMaybe<Validator_Delegations_Aggregate_Bool_Exp>
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>
}

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>
  proposer_address?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_delegations_aggregate?: InputMaybe<Validator_Delegations_Aggregate_Order_By>
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>
}

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas',
}

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "block" */
export type Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Block_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  num_txs?: InputMaybe<Scalars['Int']['input']>
  proposer_address?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['timestamp']['input']>
  total_gas?: InputMaybe<Scalars['bigint']['input']>
}

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  num_txs?: InputMaybe<Order_By>
  total_gas?: InputMaybe<Order_By>
}

/** columns and relationships of "bridge_operations" */
export type Bridge_Operations = {
  __typename?: 'bridge_operations'
  address_from?: Maybe<Scalars['String']['output']>
  created_at: Scalars['timestamp']['output']
  failed: Scalars['Boolean']['output']
  fees: Scalars['numeric']['output']
  operation_one_hash?: Maybe<Scalars['String']['output']>
  operation_one_tx_hash?: Maybe<Scalars['String']['output']>
  operation_two_hash?: Maybe<Scalars['String']['output']>
  operation_two_tx_hash?: Maybe<Scalars['String']['output']>
  src_hash: Scalars['String']['output']
  step: Scalars['Int']['output']
  updated_at: Scalars['timestamp']['output']
}

export type Bridge_Operations_ActionType = {
  __typename?: 'bridge_operations_ActionType'
  address_from?: Maybe<Scalars['String']['output']>
  created_at: Scalars['timestamp']['output']
  failed: Scalars['Boolean']['output']
  fees: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  operation_one_hash?: Maybe<Scalars['String']['output']>
  operation_one_tx_hash?: Maybe<Scalars['String']['output']>
  operation_two_hash?: Maybe<Scalars['String']['output']>
  operation_two_tx_hash?: Maybe<Scalars['String']['output']>
  src_hash: Scalars['String']['output']
  step: Scalars['Int']['output']
  updated_at: Scalars['timestamp']['output']
}

/** aggregated selection of "bridge_operations" */
export type Bridge_Operations_Aggregate = {
  __typename?: 'bridge_operations_aggregate'
  aggregate?: Maybe<Bridge_Operations_Aggregate_Fields>
  nodes: Array<Bridge_Operations>
}

/** aggregate fields of "bridge_operations" */
export type Bridge_Operations_Aggregate_Fields = {
  __typename?: 'bridge_operations_aggregate_fields'
  avg?: Maybe<Bridge_Operations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Bridge_Operations_Max_Fields>
  min?: Maybe<Bridge_Operations_Min_Fields>
  stddev?: Maybe<Bridge_Operations_Stddev_Fields>
  stddev_pop?: Maybe<Bridge_Operations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Bridge_Operations_Stddev_Samp_Fields>
  sum?: Maybe<Bridge_Operations_Sum_Fields>
  var_pop?: Maybe<Bridge_Operations_Var_Pop_Fields>
  var_samp?: Maybe<Bridge_Operations_Var_Samp_Fields>
  variance?: Maybe<Bridge_Operations_Variance_Fields>
}

/** aggregate fields of "bridge_operations" */
export type Bridge_Operations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bridge_Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Bridge_Operations_Avg_Fields = {
  __typename?: 'bridge_operations_avg_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "bridge_operations". All fields are combined with a logical 'AND'. */
export type Bridge_Operations_Bool_Exp = {
  _and?: InputMaybe<Array<Bridge_Operations_Bool_Exp>>
  _not?: InputMaybe<Bridge_Operations_Bool_Exp>
  _or?: InputMaybe<Array<Bridge_Operations_Bool_Exp>>
  address_from?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  failed?: InputMaybe<Boolean_Comparison_Exp>
  fees?: InputMaybe<Numeric_Comparison_Exp>
  operation_one_hash?: InputMaybe<String_Comparison_Exp>
  operation_one_tx_hash?: InputMaybe<String_Comparison_Exp>
  operation_two_hash?: InputMaybe<String_Comparison_Exp>
  operation_two_tx_hash?: InputMaybe<String_Comparison_Exp>
  src_hash?: InputMaybe<String_Comparison_Exp>
  step?: InputMaybe<Int_Comparison_Exp>
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>
}

/** aggregate max on columns */
export type Bridge_Operations_Max_Fields = {
  __typename?: 'bridge_operations_max_fields'
  address_from?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  fees?: Maybe<Scalars['numeric']['output']>
  operation_one_hash?: Maybe<Scalars['String']['output']>
  operation_one_tx_hash?: Maybe<Scalars['String']['output']>
  operation_two_hash?: Maybe<Scalars['String']['output']>
  operation_two_tx_hash?: Maybe<Scalars['String']['output']>
  src_hash?: Maybe<Scalars['String']['output']>
  step?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['timestamp']['output']>
}

/** aggregate min on columns */
export type Bridge_Operations_Min_Fields = {
  __typename?: 'bridge_operations_min_fields'
  address_from?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  fees?: Maybe<Scalars['numeric']['output']>
  operation_one_hash?: Maybe<Scalars['String']['output']>
  operation_one_tx_hash?: Maybe<Scalars['String']['output']>
  operation_two_hash?: Maybe<Scalars['String']['output']>
  operation_two_tx_hash?: Maybe<Scalars['String']['output']>
  src_hash?: Maybe<Scalars['String']['output']>
  step?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['timestamp']['output']>
}

/** Ordering options when selecting data from "bridge_operations". */
export type Bridge_Operations_Order_By = {
  address_from?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  failed?: InputMaybe<Order_By>
  fees?: InputMaybe<Order_By>
  operation_one_hash?: InputMaybe<Order_By>
  operation_one_tx_hash?: InputMaybe<Order_By>
  operation_two_hash?: InputMaybe<Order_By>
  operation_two_tx_hash?: InputMaybe<Order_By>
  src_hash?: InputMaybe<Order_By>
  step?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** select columns of table "bridge_operations" */
export enum Bridge_Operations_Select_Column {
  /** column name */
  AddressFrom = 'address_from',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Failed = 'failed',
  /** column name */
  Fees = 'fees',
  /** column name */
  OperationOneHash = 'operation_one_hash',
  /** column name */
  OperationOneTxHash = 'operation_one_tx_hash',
  /** column name */
  OperationTwoHash = 'operation_two_hash',
  /** column name */
  OperationTwoTxHash = 'operation_two_tx_hash',
  /** column name */
  SrcHash = 'src_hash',
  /** column name */
  Step = 'step',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Bridge_Operations_Stddev_Fields = {
  __typename?: 'bridge_operations_stddev_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Bridge_Operations_Stddev_Pop_Fields = {
  __typename?: 'bridge_operations_stddev_pop_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Bridge_Operations_Stddev_Samp_Fields = {
  __typename?: 'bridge_operations_stddev_samp_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "bridge_operations" */
export type Bridge_Operations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bridge_Operations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Bridge_Operations_Stream_Cursor_Value_Input = {
  address_from?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  failed?: InputMaybe<Scalars['Boolean']['input']>
  fees?: InputMaybe<Scalars['numeric']['input']>
  operation_one_hash?: InputMaybe<Scalars['String']['input']>
  operation_one_tx_hash?: InputMaybe<Scalars['String']['input']>
  operation_two_hash?: InputMaybe<Scalars['String']['input']>
  operation_two_tx_hash?: InputMaybe<Scalars['String']['input']>
  src_hash?: InputMaybe<Scalars['String']['input']>
  step?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<Scalars['timestamp']['input']>
}

/** aggregate sum on columns */
export type Bridge_Operations_Sum_Fields = {
  __typename?: 'bridge_operations_sum_fields'
  fees?: Maybe<Scalars['numeric']['output']>
  step?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Bridge_Operations_Var_Pop_Fields = {
  __typename?: 'bridge_operations_var_pop_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Bridge_Operations_Var_Samp_Fields = {
  __typename?: 'bridge_operations_var_samp_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Bridge_Operations_Variance_Fields = {
  __typename?: 'bridge_operations_variance_fields'
  fees?: Maybe<Scalars['Float']['output']>
  step?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category'
  /** An array relationship */
  assets_infos: Array<Assets_Info>
  /** An aggregate relationship */
  assets_infos_aggregate: Assets_Info_Aggregate
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
}

/** columns and relationships of "category" */
export type CategoryAssets_InfosArgs = {
  distinct_on?: InputMaybe<Array<Assets_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Info_Order_By>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

/** columns and relationships of "category" */
export type CategoryAssets_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Info_Order_By>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate'
  aggregate?: Maybe<Category_Aggregate_Fields>
  nodes: Array<Category>
}

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields'
  avg?: Maybe<Category_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Category_Max_Fields>
  min?: Maybe<Category_Min_Fields>
  stddev?: Maybe<Category_Stddev_Fields>
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>
  sum?: Maybe<Category_Sum_Fields>
  var_pop?: Maybe<Category_Var_Pop_Fields>
  var_samp?: Maybe<Category_Var_Samp_Fields>
  variance?: Maybe<Category_Variance_Fields>
}

/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'category_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>
  _not?: InputMaybe<Category_Bool_Exp>
  _or?: InputMaybe<Array<Category_Bool_Exp>>
  assets_infos?: InputMaybe<Assets_Info_Bool_Exp>
  assets_infos_aggregate?: InputMaybe<Assets_Info_Aggregate_Bool_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  assets_infos_aggregate?: InputMaybe<Assets_Info_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'category_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'category_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'category_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'category_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'category_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'category_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'category_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to compare columns of type "cctp_attestation_status". All fields are combined with logical 'AND'. */
export type Cctp_Attestation_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  _gt?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  _gte?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  _in?: InputMaybe<Array<Scalars['cctp_attestation_status']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  _lte?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  _neq?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  _nin?: InputMaybe<Array<Scalars['cctp_attestation_status']['input']>>
}

/** columns and relationships of "cctp_bridge_operations" */
export type Cctp_Bridge_Operations = {
  __typename?: 'cctp_bridge_operations'
  amount: Scalars['String']['output']
  attestation?: Maybe<Scalars['String']['output']>
  attestation_status: Scalars['cctp_attestation_status']['output']
  claimable: Scalars['Boolean']['output']
  claimable_at?: Maybe<Scalars['timestamptz']['output']>
  claimed: Scalars['Boolean']['output']
  claimed_at?: Maybe<Scalars['timestamptz']['output']>
  created_at: Scalars['timestamptz']['output']
  dst_chain_id: Scalars['String']['output']
  dst_tx_hash?: Maybe<Scalars['String']['output']>
  id: Scalars['bigint']['output']
  msg_hash: Scalars['String']['output']
  recipient: Scalars['String']['output']
  sender: Scalars['String']['output']
  src_chain_id: Scalars['String']['output']
  src_tx_hash: Scalars['String']['output']
  updated_at: Scalars['timestamptz']['output']
}

/** aggregated selection of "cctp_bridge_operations" */
export type Cctp_Bridge_Operations_Aggregate = {
  __typename?: 'cctp_bridge_operations_aggregate'
  aggregate?: Maybe<Cctp_Bridge_Operations_Aggregate_Fields>
  nodes: Array<Cctp_Bridge_Operations>
}

/** aggregate fields of "cctp_bridge_operations" */
export type Cctp_Bridge_Operations_Aggregate_Fields = {
  __typename?: 'cctp_bridge_operations_aggregate_fields'
  avg?: Maybe<Cctp_Bridge_Operations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Cctp_Bridge_Operations_Max_Fields>
  min?: Maybe<Cctp_Bridge_Operations_Min_Fields>
  stddev?: Maybe<Cctp_Bridge_Operations_Stddev_Fields>
  stddev_pop?: Maybe<Cctp_Bridge_Operations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Cctp_Bridge_Operations_Stddev_Samp_Fields>
  sum?: Maybe<Cctp_Bridge_Operations_Sum_Fields>
  var_pop?: Maybe<Cctp_Bridge_Operations_Var_Pop_Fields>
  var_samp?: Maybe<Cctp_Bridge_Operations_Var_Samp_Fields>
  variance?: Maybe<Cctp_Bridge_Operations_Variance_Fields>
}

/** aggregate fields of "cctp_bridge_operations" */
export type Cctp_Bridge_Operations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cctp_Bridge_Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Cctp_Bridge_Operations_Avg_Fields = {
  __typename?: 'cctp_bridge_operations_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "cctp_bridge_operations". All fields are combined with a logical 'AND'. */
export type Cctp_Bridge_Operations_Bool_Exp = {
  _and?: InputMaybe<Array<Cctp_Bridge_Operations_Bool_Exp>>
  _not?: InputMaybe<Cctp_Bridge_Operations_Bool_Exp>
  _or?: InputMaybe<Array<Cctp_Bridge_Operations_Bool_Exp>>
  amount?: InputMaybe<String_Comparison_Exp>
  attestation?: InputMaybe<String_Comparison_Exp>
  attestation_status?: InputMaybe<Cctp_Attestation_Status_Comparison_Exp>
  claimable?: InputMaybe<Boolean_Comparison_Exp>
  claimable_at?: InputMaybe<Timestamptz_Comparison_Exp>
  claimed?: InputMaybe<Boolean_Comparison_Exp>
  claimed_at?: InputMaybe<Timestamptz_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dst_chain_id?: InputMaybe<String_Comparison_Exp>
  dst_tx_hash?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Bigint_Comparison_Exp>
  msg_hash?: InputMaybe<String_Comparison_Exp>
  recipient?: InputMaybe<String_Comparison_Exp>
  sender?: InputMaybe<String_Comparison_Exp>
  src_chain_id?: InputMaybe<String_Comparison_Exp>
  src_tx_hash?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Cctp_Bridge_Operations_Max_Fields = {
  __typename?: 'cctp_bridge_operations_max_fields'
  amount?: Maybe<Scalars['String']['output']>
  attestation?: Maybe<Scalars['String']['output']>
  attestation_status?: Maybe<Scalars['cctp_attestation_status']['output']>
  claimable_at?: Maybe<Scalars['timestamptz']['output']>
  claimed_at?: Maybe<Scalars['timestamptz']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  dst_chain_id?: Maybe<Scalars['String']['output']>
  dst_tx_hash?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  msg_hash?: Maybe<Scalars['String']['output']>
  recipient?: Maybe<Scalars['String']['output']>
  sender?: Maybe<Scalars['String']['output']>
  src_chain_id?: Maybe<Scalars['String']['output']>
  src_tx_hash?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type Cctp_Bridge_Operations_Min_Fields = {
  __typename?: 'cctp_bridge_operations_min_fields'
  amount?: Maybe<Scalars['String']['output']>
  attestation?: Maybe<Scalars['String']['output']>
  attestation_status?: Maybe<Scalars['cctp_attestation_status']['output']>
  claimable_at?: Maybe<Scalars['timestamptz']['output']>
  claimed_at?: Maybe<Scalars['timestamptz']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  dst_chain_id?: Maybe<Scalars['String']['output']>
  dst_tx_hash?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  msg_hash?: Maybe<Scalars['String']['output']>
  recipient?: Maybe<Scalars['String']['output']>
  sender?: Maybe<Scalars['String']['output']>
  src_chain_id?: Maybe<Scalars['String']['output']>
  src_tx_hash?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** Ordering options when selecting data from "cctp_bridge_operations". */
export type Cctp_Bridge_Operations_Order_By = {
  amount?: InputMaybe<Order_By>
  attestation?: InputMaybe<Order_By>
  attestation_status?: InputMaybe<Order_By>
  claimable?: InputMaybe<Order_By>
  claimable_at?: InputMaybe<Order_By>
  claimed?: InputMaybe<Order_By>
  claimed_at?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  dst_chain_id?: InputMaybe<Order_By>
  dst_tx_hash?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  msg_hash?: InputMaybe<Order_By>
  recipient?: InputMaybe<Order_By>
  sender?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
  src_tx_hash?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** select columns of table "cctp_bridge_operations" */
export enum Cctp_Bridge_Operations_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Attestation = 'attestation',
  /** column name */
  AttestationStatus = 'attestation_status',
  /** column name */
  Claimable = 'claimable',
  /** column name */
  ClaimableAt = 'claimable_at',
  /** column name */
  Claimed = 'claimed',
  /** column name */
  ClaimedAt = 'claimed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DstChainId = 'dst_chain_id',
  /** column name */
  DstTxHash = 'dst_tx_hash',
  /** column name */
  Id = 'id',
  /** column name */
  MsgHash = 'msg_hash',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  Sender = 'sender',
  /** column name */
  SrcChainId = 'src_chain_id',
  /** column name */
  SrcTxHash = 'src_tx_hash',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Cctp_Bridge_Operations_Stddev_Fields = {
  __typename?: 'cctp_bridge_operations_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Cctp_Bridge_Operations_Stddev_Pop_Fields = {
  __typename?: 'cctp_bridge_operations_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Cctp_Bridge_Operations_Stddev_Samp_Fields = {
  __typename?: 'cctp_bridge_operations_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "cctp_bridge_operations" */
export type Cctp_Bridge_Operations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cctp_Bridge_Operations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Cctp_Bridge_Operations_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['String']['input']>
  attestation?: InputMaybe<Scalars['String']['input']>
  attestation_status?: InputMaybe<Scalars['cctp_attestation_status']['input']>
  claimable?: InputMaybe<Scalars['Boolean']['input']>
  claimable_at?: InputMaybe<Scalars['timestamptz']['input']>
  claimed?: InputMaybe<Scalars['Boolean']['input']>
  claimed_at?: InputMaybe<Scalars['timestamptz']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  dst_chain_id?: InputMaybe<Scalars['String']['input']>
  dst_tx_hash?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['bigint']['input']>
  msg_hash?: InputMaybe<Scalars['String']['input']>
  recipient?: InputMaybe<Scalars['String']['input']>
  sender?: InputMaybe<Scalars['String']['input']>
  src_chain_id?: InputMaybe<Scalars['String']['input']>
  src_tx_hash?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Cctp_Bridge_Operations_Sum_Fields = {
  __typename?: 'cctp_bridge_operations_sum_fields'
  id?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Cctp_Bridge_Operations_Var_Pop_Fields = {
  __typename?: 'cctp_bridge_operations_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Cctp_Bridge_Operations_Var_Samp_Fields = {
  __typename?: 'cctp_bridge_operations_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Cctp_Bridge_Operations_Variance_Fields = {
  __typename?: 'cctp_bridge_operations_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to compare columns of type "coin". All fields are combined with logical 'AND'. */
export type Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['coin']['input']>>
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['coin']['input']>>
  _eq?: InputMaybe<Array<Scalars['coin']['input']>>
  _gt?: InputMaybe<Array<Scalars['coin']['input']>>
  _gte?: InputMaybe<Array<Scalars['coin']['input']>>
  _in?: InputMaybe<Array<Array<Scalars['coin']['input']>>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Array<Scalars['coin']['input']>>
  _lte?: InputMaybe<Array<Scalars['coin']['input']>>
  _neq?: InputMaybe<Array<Scalars['coin']['input']>>
  _nin?: InputMaybe<Array<Array<Scalars['coin']['input']>>>
}

/** columns and relationships of "common_bridge_operations" */
export type Common_Bridge_Operations = {
  __typename?: 'common_bridge_operations'
  amount: Scalars['String']['output']
  arrived_at?: Maybe<Scalars['timestamptz']['output']>
  bridge_protocol: Scalars['String']['output']
  created_at: Scalars['timestamptz']['output']
  dst_chain_id: Scalars['String']['output']
  dst_tx_hash?: Maybe<Scalars['String']['output']>
  id: Scalars['bigint']['output']
  metadata: Scalars['jsonb']['output']
  received_amount: Scalars['String']['output']
  recipient: Scalars['String']['output']
  sender: Scalars['String']['output']
  src_chain_id: Scalars['String']['output']
  src_tx_hash: Scalars['String']['output']
  status: Scalars['String']['output']
  token: Scalars['String']['output']
  updated_at: Scalars['timestamptz']['output']
}

/** columns and relationships of "common_bridge_operations" */
export type Common_Bridge_OperationsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "common_bridge_operations" */
export type Common_Bridge_Operations_Aggregate = {
  __typename?: 'common_bridge_operations_aggregate'
  aggregate?: Maybe<Common_Bridge_Operations_Aggregate_Fields>
  nodes: Array<Common_Bridge_Operations>
}

/** aggregate fields of "common_bridge_operations" */
export type Common_Bridge_Operations_Aggregate_Fields = {
  __typename?: 'common_bridge_operations_aggregate_fields'
  avg?: Maybe<Common_Bridge_Operations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Common_Bridge_Operations_Max_Fields>
  min?: Maybe<Common_Bridge_Operations_Min_Fields>
  stddev?: Maybe<Common_Bridge_Operations_Stddev_Fields>
  stddev_pop?: Maybe<Common_Bridge_Operations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Common_Bridge_Operations_Stddev_Samp_Fields>
  sum?: Maybe<Common_Bridge_Operations_Sum_Fields>
  var_pop?: Maybe<Common_Bridge_Operations_Var_Pop_Fields>
  var_samp?: Maybe<Common_Bridge_Operations_Var_Samp_Fields>
  variance?: Maybe<Common_Bridge_Operations_Variance_Fields>
}

/** aggregate fields of "common_bridge_operations" */
export type Common_Bridge_Operations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Common_Bridge_Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Common_Bridge_Operations_Avg_Fields = {
  __typename?: 'common_bridge_operations_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "common_bridge_operations". All fields are combined with a logical 'AND'. */
export type Common_Bridge_Operations_Bool_Exp = {
  _and?: InputMaybe<Array<Common_Bridge_Operations_Bool_Exp>>
  _not?: InputMaybe<Common_Bridge_Operations_Bool_Exp>
  _or?: InputMaybe<Array<Common_Bridge_Operations_Bool_Exp>>
  amount?: InputMaybe<String_Comparison_Exp>
  arrived_at?: InputMaybe<Timestamptz_Comparison_Exp>
  bridge_protocol?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  dst_chain_id?: InputMaybe<String_Comparison_Exp>
  dst_tx_hash?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Bigint_Comparison_Exp>
  metadata?: InputMaybe<Jsonb_Comparison_Exp>
  received_amount?: InputMaybe<String_Comparison_Exp>
  recipient?: InputMaybe<String_Comparison_Exp>
  sender?: InputMaybe<String_Comparison_Exp>
  src_chain_id?: InputMaybe<String_Comparison_Exp>
  src_tx_hash?: InputMaybe<String_Comparison_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  token?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** aggregate max on columns */
export type Common_Bridge_Operations_Max_Fields = {
  __typename?: 'common_bridge_operations_max_fields'
  amount?: Maybe<Scalars['String']['output']>
  arrived_at?: Maybe<Scalars['timestamptz']['output']>
  bridge_protocol?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  dst_chain_id?: Maybe<Scalars['String']['output']>
  dst_tx_hash?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  received_amount?: Maybe<Scalars['String']['output']>
  recipient?: Maybe<Scalars['String']['output']>
  sender?: Maybe<Scalars['String']['output']>
  src_chain_id?: Maybe<Scalars['String']['output']>
  src_tx_hash?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
  token?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** aggregate min on columns */
export type Common_Bridge_Operations_Min_Fields = {
  __typename?: 'common_bridge_operations_min_fields'
  amount?: Maybe<Scalars['String']['output']>
  arrived_at?: Maybe<Scalars['timestamptz']['output']>
  bridge_protocol?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['timestamptz']['output']>
  dst_chain_id?: Maybe<Scalars['String']['output']>
  dst_tx_hash?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  received_amount?: Maybe<Scalars['String']['output']>
  recipient?: Maybe<Scalars['String']['output']>
  sender?: Maybe<Scalars['String']['output']>
  src_chain_id?: Maybe<Scalars['String']['output']>
  src_tx_hash?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
  token?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['timestamptz']['output']>
}

/** Ordering options when selecting data from "common_bridge_operations". */
export type Common_Bridge_Operations_Order_By = {
  amount?: InputMaybe<Order_By>
  arrived_at?: InputMaybe<Order_By>
  bridge_protocol?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  dst_chain_id?: InputMaybe<Order_By>
  dst_tx_hash?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  received_amount?: InputMaybe<Order_By>
  recipient?: InputMaybe<Order_By>
  sender?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
  src_tx_hash?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  token?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** select columns of table "common_bridge_operations" */
export enum Common_Bridge_Operations_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ArrivedAt = 'arrived_at',
  /** column name */
  BridgeProtocol = 'bridge_protocol',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DstChainId = 'dst_chain_id',
  /** column name */
  DstTxHash = 'dst_tx_hash',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ReceivedAmount = 'received_amount',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  Sender = 'sender',
  /** column name */
  SrcChainId = 'src_chain_id',
  /** column name */
  SrcTxHash = 'src_tx_hash',
  /** column name */
  Status = 'status',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Common_Bridge_Operations_Stddev_Fields = {
  __typename?: 'common_bridge_operations_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Common_Bridge_Operations_Stddev_Pop_Fields = {
  __typename?: 'common_bridge_operations_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Common_Bridge_Operations_Stddev_Samp_Fields = {
  __typename?: 'common_bridge_operations_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "common_bridge_operations" */
export type Common_Bridge_Operations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Common_Bridge_Operations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Common_Bridge_Operations_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['String']['input']>
  arrived_at?: InputMaybe<Scalars['timestamptz']['input']>
  bridge_protocol?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  dst_chain_id?: InputMaybe<Scalars['String']['input']>
  dst_tx_hash?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['bigint']['input']>
  metadata?: InputMaybe<Scalars['jsonb']['input']>
  received_amount?: InputMaybe<Scalars['String']['input']>
  recipient?: InputMaybe<Scalars['String']['input']>
  sender?: InputMaybe<Scalars['String']['input']>
  src_chain_id?: InputMaybe<Scalars['String']['input']>
  src_tx_hash?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>
}

/** aggregate sum on columns */
export type Common_Bridge_Operations_Sum_Fields = {
  __typename?: 'common_bridge_operations_sum_fields'
  id?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Common_Bridge_Operations_Var_Pop_Fields = {
  __typename?: 'common_bridge_operations_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Common_Bridge_Operations_Var_Samp_Fields = {
  __typename?: 'common_bridge_operations_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Common_Bridge_Operations_Variance_Fields = {
  __typename?: 'common_bridge_operations_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool'
  coins: Array<Scalars['dec_coin']['output']>
  height: Scalars['bigint']['output']
}

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Pool_Bool_Exp>>
  _not?: InputMaybe<Community_Pool_Bool_Exp>
  _or?: InputMaybe<Array<Community_Pool_Bool_Exp>>
  coins?: InputMaybe<Dec_Coin_Array_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "community_pool" */
export type Community_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Community_Pool_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Community_Pool_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "dec_coin". All fields are combined with logical 'AND'. */
export type Dec_Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _eq?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _gt?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _gte?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _in?: InputMaybe<Array<Array<Scalars['dec_coin']['input']>>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _lte?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _neq?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  _nin?: InputMaybe<Array<Array<Scalars['dec_coin']['input']>>>
}

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params'
  height: Scalars['bigint']['output']
  params: Scalars['jsonb']['output']
}

/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Distribution_Params_Bool_Exp>>
  _not?: InputMaybe<Distribution_Params_Bool_Exp>
  _or?: InputMaybe<Array<Distribution_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params',
}

/** Streaming cursor of the table "distribution_params" */
export type Distribution_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Distribution_Params_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Distribution_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  params?: InputMaybe<Scalars['jsonb']['input']>
}

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence'
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote
  height: Scalars['bigint']['output']
  vote_a_id: Scalars['bigint']['output']
  vote_b_id: Scalars['bigint']['output']
}

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Evidence_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Double_Sign_Evidence_Max_Order_By>
  min?: InputMaybe<Double_Sign_Evidence_Min_Order_By>
  stddev?: InputMaybe<Double_Sign_Evidence_Stddev_Order_By>
  stddev_pop?: InputMaybe<Double_Sign_Evidence_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Double_Sign_Evidence_Stddev_Samp_Order_By>
  sum?: InputMaybe<Double_Sign_Evidence_Sum_Order_By>
  var_pop?: InputMaybe<Double_Sign_Evidence_Var_Pop_Order_By>
  var_samp?: InputMaybe<Double_Sign_Evidence_Var_Samp_Order_By>
  variance?: InputMaybe<Double_Sign_Evidence_Variance_Order_By>
}

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>
  _not?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
  _or?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>
}

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Order_By>
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Order_By>
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id',
}

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "double_sign_evidence" */
export type Double_Sign_Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Evidence_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Evidence_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  vote_a_id?: InputMaybe<Scalars['bigint']['input']>
  vote_b_id?: InputMaybe<Scalars['bigint']['input']>
}

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  vote_a_id?: InputMaybe<Order_By>
  vote_b_id?: InputMaybe<Order_By>
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote'
  block_id: Scalars['String']['output']
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>
  height: Scalars['bigint']['output']
  round: Scalars['Int']['output']
  signature: Scalars['String']['output']
  type: Scalars['smallint']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
  validator_index: Scalars['Int']['output']
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Vote_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Double_Sign_Vote_Max_Order_By>
  min?: InputMaybe<Double_Sign_Vote_Min_Order_By>
  stddev?: InputMaybe<Double_Sign_Vote_Stddev_Order_By>
  stddev_pop?: InputMaybe<Double_Sign_Vote_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Double_Sign_Vote_Stddev_Samp_Order_By>
  sum?: InputMaybe<Double_Sign_Vote_Sum_Order_By>
  var_pop?: InputMaybe<Double_Sign_Vote_Var_Pop_Order_By>
  var_samp?: InputMaybe<Double_Sign_Vote_Var_Samp_Order_By>
  variance?: InputMaybe<Double_Sign_Vote_Variance_Order_By>
}

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>
  _not?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  _or?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>
  block_id?: InputMaybe<String_Comparison_Exp>
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  round?: InputMaybe<Int_Comparison_Exp>
  signature?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<Smallint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  validator_index?: InputMaybe<Int_Comparison_Exp>
}

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  signature?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  signature?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  signature?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index',
}

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "double_sign_vote" */
export type Double_Sign_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Vote_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Vote_Stream_Cursor_Value_Input = {
  block_id?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  round?: InputMaybe<Scalars['Int']['input']>
  signature?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['smallint']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
  validator_index?: InputMaybe<Scalars['Int']['input']>
}

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  validator_index?: InputMaybe<Order_By>
}

/** columns and relationships of "evm_processed_blocks" */
export type Evm_Processed_Blocks = {
  __typename?: 'evm_processed_blocks'
  network: Scalars['String']['output']
  number: Scalars['numeric']['output']
}

/** Boolean expression to filter rows from the table "evm_processed_blocks". All fields are combined with a logical 'AND'. */
export type Evm_Processed_Blocks_Bool_Exp = {
  _and?: InputMaybe<Array<Evm_Processed_Blocks_Bool_Exp>>
  _not?: InputMaybe<Evm_Processed_Blocks_Bool_Exp>
  _or?: InputMaybe<Array<Evm_Processed_Blocks_Bool_Exp>>
  network?: InputMaybe<String_Comparison_Exp>
  number?: InputMaybe<Numeric_Comparison_Exp>
}

/** Ordering options when selecting data from "evm_processed_blocks". */
export type Evm_Processed_Blocks_Order_By = {
  network?: InputMaybe<Order_By>
  number?: InputMaybe<Order_By>
}

/** select columns of table "evm_processed_blocks" */
export enum Evm_Processed_Blocks_Select_Column {
  /** column name */
  Network = 'network',
  /** column name */
  Number = 'number',
}

/** Streaming cursor of the table "evm_processed_blocks" */
export type Evm_Processed_Blocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Evm_Processed_Blocks_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Evm_Processed_Blocks_Stream_Cursor_Value_Input = {
  network?: InputMaybe<Scalars['String']['input']>
  number?: InputMaybe<Scalars['numeric']['input']>
}

/** columns and relationships of "evmos_inflation_data" */
export type Evmos_Inflation_Data = {
  __typename?: 'evmos_inflation_data'
  circulating_supply: Array<Scalars['dec_coin']['output']>
  height: Scalars['bigint']['output']
  inflation_period: Scalars['Int']['output']
  inflation_rate: Scalars['numeric']['output']
  one_row_id: Scalars['Boolean']['output']
  skipped_epochs: Scalars['Int']['output']
}

/** aggregated selection of "evmos_inflation_data" */
export type Evmos_Inflation_Data_Aggregate = {
  __typename?: 'evmos_inflation_data_aggregate'
  aggregate?: Maybe<Evmos_Inflation_Data_Aggregate_Fields>
  nodes: Array<Evmos_Inflation_Data>
}

/** aggregate fields of "evmos_inflation_data" */
export type Evmos_Inflation_Data_Aggregate_Fields = {
  __typename?: 'evmos_inflation_data_aggregate_fields'
  avg?: Maybe<Evmos_Inflation_Data_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Evmos_Inflation_Data_Max_Fields>
  min?: Maybe<Evmos_Inflation_Data_Min_Fields>
  stddev?: Maybe<Evmos_Inflation_Data_Stddev_Fields>
  stddev_pop?: Maybe<Evmos_Inflation_Data_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Evmos_Inflation_Data_Stddev_Samp_Fields>
  sum?: Maybe<Evmos_Inflation_Data_Sum_Fields>
  var_pop?: Maybe<Evmos_Inflation_Data_Var_Pop_Fields>
  var_samp?: Maybe<Evmos_Inflation_Data_Var_Samp_Fields>
  variance?: Maybe<Evmos_Inflation_Data_Variance_Fields>
}

/** aggregate fields of "evmos_inflation_data" */
export type Evmos_Inflation_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Evmos_Inflation_Data_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Evmos_Inflation_Data_Avg_Fields = {
  __typename?: 'evmos_inflation_data_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "evmos_inflation_data". All fields are combined with a logical 'AND'. */
export type Evmos_Inflation_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Evmos_Inflation_Data_Bool_Exp>>
  _not?: InputMaybe<Evmos_Inflation_Data_Bool_Exp>
  _or?: InputMaybe<Array<Evmos_Inflation_Data_Bool_Exp>>
  circulating_supply?: InputMaybe<Dec_Coin_Array_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  inflation_period?: InputMaybe<Int_Comparison_Exp>
  inflation_rate?: InputMaybe<Numeric_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  skipped_epochs?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Evmos_Inflation_Data_Max_Fields = {
  __typename?: 'evmos_inflation_data_max_fields'
  circulating_supply?: Maybe<Array<Scalars['dec_coin']['output']>>
  height?: Maybe<Scalars['bigint']['output']>
  inflation_period?: Maybe<Scalars['Int']['output']>
  inflation_rate?: Maybe<Scalars['numeric']['output']>
  skipped_epochs?: Maybe<Scalars['Int']['output']>
}

/** aggregate min on columns */
export type Evmos_Inflation_Data_Min_Fields = {
  __typename?: 'evmos_inflation_data_min_fields'
  circulating_supply?: Maybe<Array<Scalars['dec_coin']['output']>>
  height?: Maybe<Scalars['bigint']['output']>
  inflation_period?: Maybe<Scalars['Int']['output']>
  inflation_rate?: Maybe<Scalars['numeric']['output']>
  skipped_epochs?: Maybe<Scalars['Int']['output']>
}

/** Ordering options when selecting data from "evmos_inflation_data". */
export type Evmos_Inflation_Data_Order_By = {
  circulating_supply?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  inflation_period?: InputMaybe<Order_By>
  inflation_rate?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  skipped_epochs?: InputMaybe<Order_By>
}

/** select columns of table "evmos_inflation_data" */
export enum Evmos_Inflation_Data_Select_Column {
  /** column name */
  CirculatingSupply = 'circulating_supply',
  /** column name */
  Height = 'height',
  /** column name */
  InflationPeriod = 'inflation_period',
  /** column name */
  InflationRate = 'inflation_rate',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  SkippedEpochs = 'skipped_epochs',
}

/** aggregate stddev on columns */
export type Evmos_Inflation_Data_Stddev_Fields = {
  __typename?: 'evmos_inflation_data_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Evmos_Inflation_Data_Stddev_Pop_Fields = {
  __typename?: 'evmos_inflation_data_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Evmos_Inflation_Data_Stddev_Samp_Fields = {
  __typename?: 'evmos_inflation_data_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "evmos_inflation_data" */
export type Evmos_Inflation_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Evmos_Inflation_Data_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Evmos_Inflation_Data_Stream_Cursor_Value_Input = {
  circulating_supply?: InputMaybe<Array<Scalars['dec_coin']['input']>>
  height?: InputMaybe<Scalars['bigint']['input']>
  inflation_period?: InputMaybe<Scalars['Int']['input']>
  inflation_rate?: InputMaybe<Scalars['numeric']['input']>
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>
  skipped_epochs?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type Evmos_Inflation_Data_Sum_Fields = {
  __typename?: 'evmos_inflation_data_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
  inflation_period?: Maybe<Scalars['Int']['output']>
  inflation_rate?: Maybe<Scalars['numeric']['output']>
  skipped_epochs?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Evmos_Inflation_Data_Var_Pop_Fields = {
  __typename?: 'evmos_inflation_data_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Evmos_Inflation_Data_Var_Samp_Fields = {
  __typename?: 'evmos_inflation_data_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Evmos_Inflation_Data_Variance_Fields = {
  __typename?: 'evmos_inflation_data_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
  inflation_period?: Maybe<Scalars['Float']['output']>
  inflation_rate?: Maybe<Scalars['Float']['output']>
  skipped_epochs?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "evmos_inflation_params" */
export type Evmos_Inflation_Params = {
  __typename?: 'evmos_inflation_params'
  height: Scalars['bigint']['output']
  one_row_id: Scalars['Boolean']['output']
  params: Scalars['jsonb']['output']
}

/** columns and relationships of "evmos_inflation_params" */
export type Evmos_Inflation_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "evmos_inflation_params" */
export type Evmos_Inflation_Params_Aggregate = {
  __typename?: 'evmos_inflation_params_aggregate'
  aggregate?: Maybe<Evmos_Inflation_Params_Aggregate_Fields>
  nodes: Array<Evmos_Inflation_Params>
}

/** aggregate fields of "evmos_inflation_params" */
export type Evmos_Inflation_Params_Aggregate_Fields = {
  __typename?: 'evmos_inflation_params_aggregate_fields'
  avg?: Maybe<Evmos_Inflation_Params_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Evmos_Inflation_Params_Max_Fields>
  min?: Maybe<Evmos_Inflation_Params_Min_Fields>
  stddev?: Maybe<Evmos_Inflation_Params_Stddev_Fields>
  stddev_pop?: Maybe<Evmos_Inflation_Params_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Evmos_Inflation_Params_Stddev_Samp_Fields>
  sum?: Maybe<Evmos_Inflation_Params_Sum_Fields>
  var_pop?: Maybe<Evmos_Inflation_Params_Var_Pop_Fields>
  var_samp?: Maybe<Evmos_Inflation_Params_Var_Samp_Fields>
  variance?: Maybe<Evmos_Inflation_Params_Variance_Fields>
}

/** aggregate fields of "evmos_inflation_params" */
export type Evmos_Inflation_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Evmos_Inflation_Params_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Evmos_Inflation_Params_Avg_Fields = {
  __typename?: 'evmos_inflation_params_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "evmos_inflation_params". All fields are combined with a logical 'AND'. */
export type Evmos_Inflation_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Evmos_Inflation_Params_Bool_Exp>>
  _not?: InputMaybe<Evmos_Inflation_Params_Bool_Exp>
  _or?: InputMaybe<Array<Evmos_Inflation_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** aggregate max on columns */
export type Evmos_Inflation_Params_Max_Fields = {
  __typename?: 'evmos_inflation_params_max_fields'
  height?: Maybe<Scalars['bigint']['output']>
}

/** aggregate min on columns */
export type Evmos_Inflation_Params_Min_Fields = {
  __typename?: 'evmos_inflation_params_min_fields'
  height?: Maybe<Scalars['bigint']['output']>
}

/** Ordering options when selecting data from "evmos_inflation_params". */
export type Evmos_Inflation_Params_Order_By = {
  height?: InputMaybe<Order_By>
  one_row_id?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "evmos_inflation_params" */
export enum Evmos_Inflation_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params',
}

/** aggregate stddev on columns */
export type Evmos_Inflation_Params_Stddev_Fields = {
  __typename?: 'evmos_inflation_params_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Evmos_Inflation_Params_Stddev_Pop_Fields = {
  __typename?: 'evmos_inflation_params_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Evmos_Inflation_Params_Stddev_Samp_Fields = {
  __typename?: 'evmos_inflation_params_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "evmos_inflation_params" */
export type Evmos_Inflation_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Evmos_Inflation_Params_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Evmos_Inflation_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>
  params?: InputMaybe<Scalars['jsonb']['input']>
}

/** aggregate sum on columns */
export type Evmos_Inflation_Params_Sum_Fields = {
  __typename?: 'evmos_inflation_params_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Evmos_Inflation_Params_Var_Pop_Fields = {
  __typename?: 'evmos_inflation_params_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Evmos_Inflation_Params_Var_Samp_Fields = {
  __typename?: 'evmos_inflation_params_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Evmos_Inflation_Params_Variance_Fields = {
  __typename?: 'evmos_inflation_params_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance'
  allowance: Scalars['jsonb']['output']
  /** An object relationship */
  grantee: Account
  grantee_address: Scalars['String']['output']
  /** An object relationship */
  granter: Account
  granter_address: Scalars['String']['output']
  height: Scalars['bigint']['output']
}

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>
  _not?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
  _or?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>
  allowance?: InputMaybe<Jsonb_Comparison_Exp>
  grantee?: InputMaybe<Account_Bool_Exp>
  grantee_address?: InputMaybe<String_Comparison_Exp>
  granter?: InputMaybe<Account_Bool_Exp>
  granter_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Order_By>
  grantee?: InputMaybe<Account_Order_By>
  grantee_address?: InputMaybe<Order_By>
  granter?: InputMaybe<Account_Order_By>
  granter_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fee_Grant_Allowance_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Fee_Grant_Allowance_Stream_Cursor_Value_Input = {
  allowance?: InputMaybe<Scalars['jsonb']['input']>
  grantee_address?: InputMaybe<Scalars['String']['input']>
  granter_address?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** columns and relationships of "frontend_configs" */
export type Frontend_Configs = {
  __typename?: 'frontend_configs'
  config: Scalars['json']['output']
  hiddentokens: Scalars['json']['output']
  id: Scalars['Int']['output']
}

/** columns and relationships of "frontend_configs" */
export type Frontend_ConfigsConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "frontend_configs" */
export type Frontend_ConfigsHiddentokensArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "frontend_configs" */
export type Frontend_Configs_Aggregate = {
  __typename?: 'frontend_configs_aggregate'
  aggregate?: Maybe<Frontend_Configs_Aggregate_Fields>
  nodes: Array<Frontend_Configs>
}

/** aggregate fields of "frontend_configs" */
export type Frontend_Configs_Aggregate_Fields = {
  __typename?: 'frontend_configs_aggregate_fields'
  avg?: Maybe<Frontend_Configs_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Frontend_Configs_Max_Fields>
  min?: Maybe<Frontend_Configs_Min_Fields>
  stddev?: Maybe<Frontend_Configs_Stddev_Fields>
  stddev_pop?: Maybe<Frontend_Configs_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Frontend_Configs_Stddev_Samp_Fields>
  sum?: Maybe<Frontend_Configs_Sum_Fields>
  var_pop?: Maybe<Frontend_Configs_Var_Pop_Fields>
  var_samp?: Maybe<Frontend_Configs_Var_Samp_Fields>
  variance?: Maybe<Frontend_Configs_Variance_Fields>
}

/** aggregate fields of "frontend_configs" */
export type Frontend_Configs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Frontend_Configs_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Frontend_Configs_Avg_Fields = {
  __typename?: 'frontend_configs_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "frontend_configs". All fields are combined with a logical 'AND'. */
export type Frontend_Configs_Bool_Exp = {
  _and?: InputMaybe<Array<Frontend_Configs_Bool_Exp>>
  _not?: InputMaybe<Frontend_Configs_Bool_Exp>
  _or?: InputMaybe<Array<Frontend_Configs_Bool_Exp>>
  config?: InputMaybe<Json_Comparison_Exp>
  hiddentokens?: InputMaybe<Json_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Frontend_Configs_Max_Fields = {
  __typename?: 'frontend_configs_max_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate min on columns */
export type Frontend_Configs_Min_Fields = {
  __typename?: 'frontend_configs_min_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** Ordering options when selecting data from "frontend_configs". */
export type Frontend_Configs_Order_By = {
  config?: InputMaybe<Order_By>
  hiddentokens?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** select columns of table "frontend_configs" */
export enum Frontend_Configs_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  Hiddentokens = 'hiddentokens',
  /** column name */
  Id = 'id',
}

/** aggregate stddev on columns */
export type Frontend_Configs_Stddev_Fields = {
  __typename?: 'frontend_configs_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Frontend_Configs_Stddev_Pop_Fields = {
  __typename?: 'frontend_configs_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Frontend_Configs_Stddev_Samp_Fields = {
  __typename?: 'frontend_configs_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "frontend_configs" */
export type Frontend_Configs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Frontend_Configs_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Frontend_Configs_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['json']['input']>
  hiddentokens?: InputMaybe<Scalars['json']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type Frontend_Configs_Sum_Fields = {
  __typename?: 'frontend_configs_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Frontend_Configs_Var_Pop_Fields = {
  __typename?: 'frontend_configs_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Frontend_Configs_Var_Samp_Fields = {
  __typename?: 'frontend_configs_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Frontend_Configs_Variance_Fields = {
  __typename?: 'frontend_configs_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis'
  chain_id: Scalars['String']['output']
  initial_height: Scalars['bigint']['output']
  time: Scalars['timestamp']['output']
}

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Genesis_Bool_Exp>>
  _not?: InputMaybe<Genesis_Bool_Exp>
  _or?: InputMaybe<Array<Genesis_Bool_Exp>>
  chain_id?: InputMaybe<String_Comparison_Exp>
  initial_height?: InputMaybe<Bigint_Comparison_Exp>
  time?: InputMaybe<Timestamp_Comparison_Exp>
}

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: InputMaybe<Order_By>
  initial_height?: InputMaybe<Order_By>
  time?: InputMaybe<Order_By>
}

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  Time = 'time',
}

/** Streaming cursor of the table "genesis" */
export type Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genesis_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Genesis_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['String']['input']>
  initial_height?: InputMaybe<Scalars['bigint']['input']>
  time?: InputMaybe<Scalars['timestamp']['input']>
}

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params'
  height: Scalars['bigint']['output']
  params: Scalars['jsonb']['output']
}

/** columns and relationships of "gov_params" */
export type Gov_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>
  _not?: InputMaybe<Gov_Params_Bool_Exp>
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  height?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params',
}

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  params?: InputMaybe<Scalars['jsonb']['input']>
}

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation'
  height: Scalars['bigint']['output']
  value: Scalars['numeric']['output']
}

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Inflation_Bool_Exp>>
  _not?: InputMaybe<Inflation_Bool_Exp>
  _or?: InputMaybe<Array<Inflation_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
}

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value',
}

/** Streaming cursor of the table "inflation" */
export type Inflation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inflation_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Inflation_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  value?: InputMaybe<Scalars['numeric']['input']>
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>
  _gt?: InputMaybe<Scalars['json']['input']>
  _gte?: InputMaybe<Scalars['json']['input']>
  _in?: InputMaybe<Array<Scalars['json']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['json']['input']>
  _lte?: InputMaybe<Scalars['json']['input']>
  _neq?: InputMaybe<Scalars['json']['input']>
  _nin?: InputMaybe<Array<Scalars['json']['input']>>
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>
  _eq?: InputMaybe<Scalars['jsonb']['input']>
  _gt?: InputMaybe<Scalars['jsonb']['input']>
  _gte?: InputMaybe<Scalars['jsonb']['input']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['jsonb']['input']>
  _lte?: InputMaybe<Scalars['jsonb']['input']>
  _neq?: InputMaybe<Scalars['jsonb']['input']>
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>
}

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message'
  height: Scalars['bigint']['output']
  index: Scalars['bigint']['output']
  involved_accounts_addresses: Array<Scalars['String']['output']>
  /** An object relationship */
  transaction?: Maybe<Transaction>
  transaction_hash: Scalars['String']['output']
  type: Scalars['String']['output']
  value: Scalars['jsonb']['output']
}

/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>
  _not?: InputMaybe<Message_Bool_Exp>
  _or?: InputMaybe<Array<Message_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  index?: InputMaybe<Bigint_Comparison_Exp>
  involved_accounts_addresses?: InputMaybe<String_Array_Comparison_Exp>
  transaction?: InputMaybe<Transaction_Bool_Exp>
  transaction_hash?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  value?: InputMaybe<Jsonb_Comparison_Exp>
}

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  height?: InputMaybe<Order_By>
  index?: InputMaybe<Order_By>
  involved_accounts_addresses?: InputMaybe<Order_By>
  transaction?: InputMaybe<Transaction_Order_By>
  transaction_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value',
}

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  index?: InputMaybe<Scalars['bigint']['input']>
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']['input']>>
  transaction_hash?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['jsonb']['input']>
}

export type Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['_text']['input']>
  limit?: InputMaybe<Scalars['bigint']['input']>
  offset?: InputMaybe<Scalars['bigint']['input']>
  types?: InputMaybe<Scalars['_text']['input']>
}

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params'
  height: Scalars['bigint']['output']
  params: Scalars['jsonb']['output']
}

/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Mint_Params_Bool_Exp>>
  _not?: InputMaybe<Mint_Params_Bool_Exp>
  _or?: InputMaybe<Array<Mint_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params',
}

/** Streaming cursor of the table "mint_params" */
export type Mint_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mint_Params_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Mint_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  params?: InputMaybe<Scalars['jsonb']['input']>
}

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules'
  module_name: Scalars['String']['output']
}

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>
  _not?: InputMaybe<Modules_Bool_Exp>
  _or?: InputMaybe<Array<Modules_Bool_Exp>>
  module_name?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: InputMaybe<Order_By>
}

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name',
}

/** Streaming cursor of the table "modules" */
export type Modules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Modules_Stream_Cursor_Value_Input = {
  module_name?: InputMaybe<Scalars['String']['input']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** User account management */
  changeAccountName?: Maybe<UserOutput>
  /** update data of the table: "user_account" */
  update_user_account?: Maybe<User_Account_Mutation_Response>
  /** update multiples rows of table: "user_account" */
  update_user_account_many?: Maybe<Array<Maybe<User_Account_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootChangeAccountNameArgs = {
  arg: UserInput
}

/** mutation root */
export type Mutation_RootUpdate_User_AccountArgs = {
  _set?: InputMaybe<User_Account_Set_Input>
  where: User_Account_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Account_ManyArgs = {
  updates: Array<User_Account_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>
  _gt?: InputMaybe<Scalars['numeric']['input']>
  _gte?: InputMaybe<Scalars['numeric']['input']>
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['numeric']['input']>
  _lte?: InputMaybe<Scalars['numeric']['input']>
  _neq?: InputMaybe<Scalars['numeric']['input']>
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>
}

/** columns and relationships of "operation_count_agent_address" */
export type Operation_Count_Agent_Address = {
  __typename?: 'operation_count_agent_address'
  agent_address?: Maybe<Scalars['String']['output']>
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregated selection of "operation_count_agent_address" */
export type Operation_Count_Agent_Address_Aggregate = {
  __typename?: 'operation_count_agent_address_aggregate'
  aggregate?: Maybe<Operation_Count_Agent_Address_Aggregate_Fields>
  nodes: Array<Operation_Count_Agent_Address>
}

/** aggregate fields of "operation_count_agent_address" */
export type Operation_Count_Agent_Address_Aggregate_Fields = {
  __typename?: 'operation_count_agent_address_aggregate_fields'
  avg?: Maybe<Operation_Count_Agent_Address_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Count_Agent_Address_Max_Fields>
  min?: Maybe<Operation_Count_Agent_Address_Min_Fields>
  stddev?: Maybe<Operation_Count_Agent_Address_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Count_Agent_Address_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Count_Agent_Address_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Count_Agent_Address_Sum_Fields>
  var_pop?: Maybe<Operation_Count_Agent_Address_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Count_Agent_Address_Var_Samp_Fields>
  variance?: Maybe<Operation_Count_Agent_Address_Variance_Fields>
}

/** aggregate fields of "operation_count_agent_address" */
export type Operation_Count_Agent_Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Count_Agent_Address_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Operation_Count_Agent_Address_Avg_Fields = {
  __typename?: 'operation_count_agent_address_avg_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "operation_count_agent_address". All fields are combined with a logical 'AND'. */
export type Operation_Count_Agent_Address_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Count_Agent_Address_Bool_Exp>>
  _not?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Count_Agent_Address_Bool_Exp>>
  agent_address?: InputMaybe<String_Comparison_Exp>
  msg_count?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Count_Agent_Address_Max_Fields = {
  __typename?: 'operation_count_agent_address_max_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregate min on columns */
export type Operation_Count_Agent_Address_Min_Fields = {
  __typename?: 'operation_count_agent_address_min_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** Ordering options when selecting data from "operation_count_agent_address". */
export type Operation_Count_Agent_Address_Order_By = {
  agent_address?: InputMaybe<Order_By>
  msg_count?: InputMaybe<Order_By>
}

/** select columns of table "operation_count_agent_address" */
export enum Operation_Count_Agent_Address_Select_Column {
  /** column name */
  AgentAddress = 'agent_address',
  /** column name */
  MsgCount = 'msg_count',
}

/** aggregate stddev on columns */
export type Operation_Count_Agent_Address_Stddev_Fields = {
  __typename?: 'operation_count_agent_address_stddev_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Operation_Count_Agent_Address_Stddev_Pop_Fields = {
  __typename?: 'operation_count_agent_address_stddev_pop_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Operation_Count_Agent_Address_Stddev_Samp_Fields = {
  __typename?: 'operation_count_agent_address_stddev_samp_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "operation_count_agent_address" */
export type Operation_Count_Agent_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Count_Agent_Address_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Count_Agent_Address_Stream_Cursor_Value_Input = {
  agent_address?: InputMaybe<Scalars['String']['input']>
  msg_count?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Operation_Count_Agent_Address_Sum_Fields = {
  __typename?: 'operation_count_agent_address_sum_fields'
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Operation_Count_Agent_Address_Var_Pop_Fields = {
  __typename?: 'operation_count_agent_address_var_pop_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Operation_Count_Agent_Address_Var_Samp_Fields = {
  __typename?: 'operation_count_agent_address_var_samp_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Operation_Count_Agent_Address_Variance_Fields = {
  __typename?: 'operation_count_agent_address_variance_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "operation_is_inflight" */
export type Operation_Is_Inflight = {
  __typename?: 'operation_is_inflight'
  id?: Maybe<Scalars['Int']['output']>
  is_inflight?: Maybe<Scalars['Boolean']['output']>
}

/** aggregated selection of "operation_is_inflight" */
export type Operation_Is_Inflight_Aggregate = {
  __typename?: 'operation_is_inflight_aggregate'
  aggregate?: Maybe<Operation_Is_Inflight_Aggregate_Fields>
  nodes: Array<Operation_Is_Inflight>
}

/** aggregate fields of "operation_is_inflight" */
export type Operation_Is_Inflight_Aggregate_Fields = {
  __typename?: 'operation_is_inflight_aggregate_fields'
  avg?: Maybe<Operation_Is_Inflight_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Is_Inflight_Max_Fields>
  min?: Maybe<Operation_Is_Inflight_Min_Fields>
  stddev?: Maybe<Operation_Is_Inflight_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Is_Inflight_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Is_Inflight_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Is_Inflight_Sum_Fields>
  var_pop?: Maybe<Operation_Is_Inflight_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Is_Inflight_Var_Samp_Fields>
  variance?: Maybe<Operation_Is_Inflight_Variance_Fields>
}

/** aggregate fields of "operation_is_inflight" */
export type Operation_Is_Inflight_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Is_Inflight_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Operation_Is_Inflight_Avg_Fields = {
  __typename?: 'operation_is_inflight_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "operation_is_inflight". All fields are combined with a logical 'AND'. */
export type Operation_Is_Inflight_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Is_Inflight_Bool_Exp>>
  _not?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Is_Inflight_Bool_Exp>>
  id?: InputMaybe<Int_Comparison_Exp>
  is_inflight?: InputMaybe<Boolean_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Is_Inflight_Max_Fields = {
  __typename?: 'operation_is_inflight_max_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate min on columns */
export type Operation_Is_Inflight_Min_Fields = {
  __typename?: 'operation_is_inflight_min_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** Ordering options when selecting data from "operation_is_inflight". */
export type Operation_Is_Inflight_Order_By = {
  id?: InputMaybe<Order_By>
  is_inflight?: InputMaybe<Order_By>
}

/** select columns of table "operation_is_inflight" */
export enum Operation_Is_Inflight_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsInflight = 'is_inflight',
}

/** aggregate stddev on columns */
export type Operation_Is_Inflight_Stddev_Fields = {
  __typename?: 'operation_is_inflight_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Operation_Is_Inflight_Stddev_Pop_Fields = {
  __typename?: 'operation_is_inflight_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Operation_Is_Inflight_Stddev_Samp_Fields = {
  __typename?: 'operation_is_inflight_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "operation_is_inflight" */
export type Operation_Is_Inflight_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Is_Inflight_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Is_Inflight_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>
  is_inflight?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate sum on columns */
export type Operation_Is_Inflight_Sum_Fields = {
  __typename?: 'operation_is_inflight_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** aggregate var_pop on columns */
export type Operation_Is_Inflight_Var_Pop_Fields = {
  __typename?: 'operation_is_inflight_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Operation_Is_Inflight_Var_Samp_Fields = {
  __typename?: 'operation_is_inflight_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Operation_Is_Inflight_Variance_Fields = {
  __typename?: 'operation_is_inflight_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "operation_proof" */
export type Operation_Proof = {
  __typename?: 'operation_proof'
  approveblocknumber: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  isapproved: Scalars['Boolean']['output']
  isexecuted: Scalars['Boolean']['output']
  op_id: Scalars['Int']['output']
  /** An object relationship */
  operation: Operations
  /** An array relationship */
  operation_proof_transmitter_sigs: Array<Operation_Proof_Transmitter_Sig>
  /** An aggregate relationship */
  operation_proof_transmitter_sigs_aggregate: Operation_Proof_Transmitter_Sig_Aggregate
  /** An array relationship */
  operation_proof_transmitters: Array<Operation_Proof_Transmitters>
  /** An aggregate relationship */
  operation_proof_transmitters_aggregate: Operation_Proof_Transmitters_Aggregate
  /** An array relationship */
  operation_proof_watchers: Array<Operation_Proof_Watchers>
  /** An aggregate relationship */
  operation_proof_watchers_aggregate: Operation_Proof_Watchers_Aggregate
  proofscount: Scalars['numeric']['output']
  round: Scalars['numeric']['output']
  watchersproofcount: Scalars['numeric']['output']
}

/** columns and relationships of "operation_proof" */
export type Operation_ProofOperation_Proof_Transmitter_SigsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

/** columns and relationships of "operation_proof" */
export type Operation_ProofOperation_Proof_Transmitter_Sigs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

/** columns and relationships of "operation_proof" */
export type Operation_ProofOperation_Proof_TransmittersArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitters_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

/** columns and relationships of "operation_proof" */
export type Operation_ProofOperation_Proof_Transmitters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitters_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

/** columns and relationships of "operation_proof" */
export type Operation_ProofOperation_Proof_WatchersArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Watchers_Order_By>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

/** columns and relationships of "operation_proof" */
export type Operation_ProofOperation_Proof_Watchers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Watchers_Order_By>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

/** aggregated selection of "operation_proof" */
export type Operation_Proof_Aggregate = {
  __typename?: 'operation_proof_aggregate'
  aggregate?: Maybe<Operation_Proof_Aggregate_Fields>
  nodes: Array<Operation_Proof>
}

/** aggregate fields of "operation_proof" */
export type Operation_Proof_Aggregate_Fields = {
  __typename?: 'operation_proof_aggregate_fields'
  avg?: Maybe<Operation_Proof_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Proof_Max_Fields>
  min?: Maybe<Operation_Proof_Min_Fields>
  stddev?: Maybe<Operation_Proof_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Proof_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Proof_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Proof_Sum_Fields>
  var_pop?: Maybe<Operation_Proof_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Proof_Var_Samp_Fields>
  variance?: Maybe<Operation_Proof_Variance_Fields>
}

/** aggregate fields of "operation_proof" */
export type Operation_Proof_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Proof_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Operation_Proof_Avg_Fields = {
  __typename?: 'operation_proof_avg_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "operation_proof". All fields are combined with a logical 'AND'. */
export type Operation_Proof_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Proof_Bool_Exp>>
  _not?: InputMaybe<Operation_Proof_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Proof_Bool_Exp>>
  approveblocknumber?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  isapproved?: InputMaybe<Boolean_Comparison_Exp>
  isexecuted?: InputMaybe<Boolean_Comparison_Exp>
  op_id?: InputMaybe<Int_Comparison_Exp>
  operation?: InputMaybe<Operations_Bool_Exp>
  operation_proof_transmitter_sigs?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
  operation_proof_transmitter_sigs_aggregate?: InputMaybe<Operation_Proof_Transmitter_Sig_Aggregate_Bool_Exp>
  operation_proof_transmitters?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
  operation_proof_transmitters_aggregate?: InputMaybe<Operation_Proof_Transmitters_Aggregate_Bool_Exp>
  operation_proof_watchers?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
  operation_proof_watchers_aggregate?: InputMaybe<Operation_Proof_Watchers_Aggregate_Bool_Exp>
  proofscount?: InputMaybe<Numeric_Comparison_Exp>
  round?: InputMaybe<Numeric_Comparison_Exp>
  watchersproofcount?: InputMaybe<Numeric_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Proof_Max_Fields = {
  __typename?: 'operation_proof_max_fields'
  approveblocknumber?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  op_id?: Maybe<Scalars['Int']['output']>
  proofscount?: Maybe<Scalars['numeric']['output']>
  round?: Maybe<Scalars['numeric']['output']>
  watchersproofcount?: Maybe<Scalars['numeric']['output']>
}

/** aggregate min on columns */
export type Operation_Proof_Min_Fields = {
  __typename?: 'operation_proof_min_fields'
  approveblocknumber?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  op_id?: Maybe<Scalars['Int']['output']>
  proofscount?: Maybe<Scalars['numeric']['output']>
  round?: Maybe<Scalars['numeric']['output']>
  watchersproofcount?: Maybe<Scalars['numeric']['output']>
}

/** Ordering options when selecting data from "operation_proof". */
export type Operation_Proof_Order_By = {
  approveblocknumber?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  isapproved?: InputMaybe<Order_By>
  isexecuted?: InputMaybe<Order_By>
  op_id?: InputMaybe<Order_By>
  operation?: InputMaybe<Operations_Order_By>
  operation_proof_transmitter_sigs_aggregate?: InputMaybe<Operation_Proof_Transmitter_Sig_Aggregate_Order_By>
  operation_proof_transmitters_aggregate?: InputMaybe<Operation_Proof_Transmitters_Aggregate_Order_By>
  operation_proof_watchers_aggregate?: InputMaybe<Operation_Proof_Watchers_Aggregate_Order_By>
  proofscount?: InputMaybe<Order_By>
  round?: InputMaybe<Order_By>
  watchersproofcount?: InputMaybe<Order_By>
}

/** select columns of table "operation_proof" */
export enum Operation_Proof_Select_Column {
  /** column name */
  Approveblocknumber = 'approveblocknumber',
  /** column name */
  Id = 'id',
  /** column name */
  Isapproved = 'isapproved',
  /** column name */
  Isexecuted = 'isexecuted',
  /** column name */
  OpId = 'op_id',
  /** column name */
  Proofscount = 'proofscount',
  /** column name */
  Round = 'round',
  /** column name */
  Watchersproofcount = 'watchersproofcount',
}

/** aggregate stddev on columns */
export type Operation_Proof_Stddev_Fields = {
  __typename?: 'operation_proof_stddev_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Operation_Proof_Stddev_Pop_Fields = {
  __typename?: 'operation_proof_stddev_pop_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Operation_Proof_Stddev_Samp_Fields = {
  __typename?: 'operation_proof_stddev_samp_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "operation_proof" */
export type Operation_Proof_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Proof_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Proof_Stream_Cursor_Value_Input = {
  approveblocknumber?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  isapproved?: InputMaybe<Scalars['Boolean']['input']>
  isexecuted?: InputMaybe<Scalars['Boolean']['input']>
  op_id?: InputMaybe<Scalars['Int']['input']>
  proofscount?: InputMaybe<Scalars['numeric']['input']>
  round?: InputMaybe<Scalars['numeric']['input']>
  watchersproofcount?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Operation_Proof_Sum_Fields = {
  __typename?: 'operation_proof_sum_fields'
  approveblocknumber?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  op_id?: Maybe<Scalars['Int']['output']>
  proofscount?: Maybe<Scalars['numeric']['output']>
  round?: Maybe<Scalars['numeric']['output']>
  watchersproofcount?: Maybe<Scalars['numeric']['output']>
}

/** columns and relationships of "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig = {
  __typename?: 'operation_proof_transmitter_sig'
  id: Scalars['Int']['output']
  /** An object relationship */
  operation_proof: Operation_Proof
  proof_id: Scalars['Int']['output']
  sig: Scalars['json']['output']
}

/** columns and relationships of "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_SigSigArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Aggregate = {
  __typename?: 'operation_proof_transmitter_sig_aggregate'
  aggregate?: Maybe<Operation_Proof_Transmitter_Sig_Aggregate_Fields>
  nodes: Array<Operation_Proof_Transmitter_Sig>
}

export type Operation_Proof_Transmitter_Sig_Aggregate_Bool_Exp = {
  count?: InputMaybe<Operation_Proof_Transmitter_Sig_Aggregate_Bool_Exp_Count>
}

export type Operation_Proof_Transmitter_Sig_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Aggregate_Fields = {
  __typename?: 'operation_proof_transmitter_sig_aggregate_fields'
  avg?: Maybe<Operation_Proof_Transmitter_Sig_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Proof_Transmitter_Sig_Max_Fields>
  min?: Maybe<Operation_Proof_Transmitter_Sig_Min_Fields>
  stddev?: Maybe<Operation_Proof_Transmitter_Sig_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Proof_Transmitter_Sig_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Proof_Transmitter_Sig_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Proof_Transmitter_Sig_Sum_Fields>
  var_pop?: Maybe<Operation_Proof_Transmitter_Sig_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Proof_Transmitter_Sig_Var_Samp_Fields>
  variance?: Maybe<Operation_Proof_Transmitter_Sig_Variance_Fields>
}

/** aggregate fields of "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Aggregate_Order_By = {
  avg?: InputMaybe<Operation_Proof_Transmitter_Sig_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Operation_Proof_Transmitter_Sig_Max_Order_By>
  min?: InputMaybe<Operation_Proof_Transmitter_Sig_Min_Order_By>
  stddev?: InputMaybe<Operation_Proof_Transmitter_Sig_Stddev_Order_By>
  stddev_pop?: InputMaybe<Operation_Proof_Transmitter_Sig_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Operation_Proof_Transmitter_Sig_Stddev_Samp_Order_By>
  sum?: InputMaybe<Operation_Proof_Transmitter_Sig_Sum_Order_By>
  var_pop?: InputMaybe<Operation_Proof_Transmitter_Sig_Var_Pop_Order_By>
  var_samp?: InputMaybe<Operation_Proof_Transmitter_Sig_Var_Samp_Order_By>
  variance?: InputMaybe<Operation_Proof_Transmitter_Sig_Variance_Order_By>
}

/** aggregate avg on columns */
export type Operation_Proof_Transmitter_Sig_Avg_Fields = {
  __typename?: 'operation_proof_transmitter_sig_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Avg_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "operation_proof_transmitter_sig". All fields are combined with a logical 'AND'. */
export type Operation_Proof_Transmitter_Sig_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Bool_Exp>>
  _not?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Bool_Exp>>
  id?: InputMaybe<Int_Comparison_Exp>
  operation_proof?: InputMaybe<Operation_Proof_Bool_Exp>
  proof_id?: InputMaybe<Int_Comparison_Exp>
  sig?: InputMaybe<Json_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Proof_Transmitter_Sig_Max_Fields = {
  __typename?: 'operation_proof_transmitter_sig_max_fields'
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by max() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Max_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Operation_Proof_Transmitter_Sig_Min_Fields = {
  __typename?: 'operation_proof_transmitter_sig_min_fields'
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by min() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Min_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "operation_proof_transmitter_sig". */
export type Operation_Proof_Transmitter_Sig_Order_By = {
  id?: InputMaybe<Order_By>
  operation_proof?: InputMaybe<Operation_Proof_Order_By>
  proof_id?: InputMaybe<Order_By>
  sig?: InputMaybe<Order_By>
}

/** select columns of table "operation_proof_transmitter_sig" */
export enum Operation_Proof_Transmitter_Sig_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProofId = 'proof_id',
  /** column name */
  Sig = 'sig',
}

/** aggregate stddev on columns */
export type Operation_Proof_Transmitter_Sig_Stddev_Fields = {
  __typename?: 'operation_proof_transmitter_sig_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Operation_Proof_Transmitter_Sig_Stddev_Pop_Fields = {
  __typename?: 'operation_proof_transmitter_sig_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Operation_Proof_Transmitter_Sig_Stddev_Samp_Fields = {
  __typename?: 'operation_proof_transmitter_sig_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Proof_Transmitter_Sig_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Proof_Transmitter_Sig_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>
  proof_id?: InputMaybe<Scalars['Int']['input']>
  sig?: InputMaybe<Scalars['json']['input']>
}

/** aggregate sum on columns */
export type Operation_Proof_Transmitter_Sig_Sum_Fields = {
  __typename?: 'operation_proof_transmitter_sig_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Sum_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Operation_Proof_Transmitter_Sig_Var_Pop_Fields = {
  __typename?: 'operation_proof_transmitter_sig_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Operation_Proof_Transmitter_Sig_Var_Samp_Fields = {
  __typename?: 'operation_proof_transmitter_sig_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Operation_Proof_Transmitter_Sig_Variance_Fields = {
  __typename?: 'operation_proof_transmitter_sig_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "operation_proof_transmitter_sig" */
export type Operation_Proof_Transmitter_Sig_Variance_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** columns and relationships of "operation_proof_transmitters" */
export type Operation_Proof_Transmitters = {
  __typename?: 'operation_proof_transmitters'
  address: Scalars['String']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  operation_proof: Operation_Proof
  proof_id: Scalars['Int']['output']
}

/** aggregated selection of "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Aggregate = {
  __typename?: 'operation_proof_transmitters_aggregate'
  aggregate?: Maybe<Operation_Proof_Transmitters_Aggregate_Fields>
  nodes: Array<Operation_Proof_Transmitters>
}

export type Operation_Proof_Transmitters_Aggregate_Bool_Exp = {
  count?: InputMaybe<Operation_Proof_Transmitters_Aggregate_Bool_Exp_Count>
}

export type Operation_Proof_Transmitters_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Aggregate_Fields = {
  __typename?: 'operation_proof_transmitters_aggregate_fields'
  avg?: Maybe<Operation_Proof_Transmitters_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Proof_Transmitters_Max_Fields>
  min?: Maybe<Operation_Proof_Transmitters_Min_Fields>
  stddev?: Maybe<Operation_Proof_Transmitters_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Proof_Transmitters_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Proof_Transmitters_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Proof_Transmitters_Sum_Fields>
  var_pop?: Maybe<Operation_Proof_Transmitters_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Proof_Transmitters_Var_Samp_Fields>
  variance?: Maybe<Operation_Proof_Transmitters_Variance_Fields>
}

/** aggregate fields of "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Aggregate_Order_By = {
  avg?: InputMaybe<Operation_Proof_Transmitters_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Operation_Proof_Transmitters_Max_Order_By>
  min?: InputMaybe<Operation_Proof_Transmitters_Min_Order_By>
  stddev?: InputMaybe<Operation_Proof_Transmitters_Stddev_Order_By>
  stddev_pop?: InputMaybe<Operation_Proof_Transmitters_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Operation_Proof_Transmitters_Stddev_Samp_Order_By>
  sum?: InputMaybe<Operation_Proof_Transmitters_Sum_Order_By>
  var_pop?: InputMaybe<Operation_Proof_Transmitters_Var_Pop_Order_By>
  var_samp?: InputMaybe<Operation_Proof_Transmitters_Var_Samp_Order_By>
  variance?: InputMaybe<Operation_Proof_Transmitters_Variance_Order_By>
}

/** aggregate avg on columns */
export type Operation_Proof_Transmitters_Avg_Fields = {
  __typename?: 'operation_proof_transmitters_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Avg_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "operation_proof_transmitters". All fields are combined with a logical 'AND'. */
export type Operation_Proof_Transmitters_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Proof_Transmitters_Bool_Exp>>
  _not?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Proof_Transmitters_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  operation_proof?: InputMaybe<Operation_Proof_Bool_Exp>
  proof_id?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Proof_Transmitters_Max_Fields = {
  __typename?: 'operation_proof_transmitters_max_fields'
  address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by max() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Max_Order_By = {
  address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Operation_Proof_Transmitters_Min_Fields = {
  __typename?: 'operation_proof_transmitters_min_fields'
  address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by min() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Min_Order_By = {
  address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "operation_proof_transmitters". */
export type Operation_Proof_Transmitters_Order_By = {
  address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  operation_proof?: InputMaybe<Operation_Proof_Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** select columns of table "operation_proof_transmitters" */
export enum Operation_Proof_Transmitters_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  ProofId = 'proof_id',
}

/** aggregate stddev on columns */
export type Operation_Proof_Transmitters_Stddev_Fields = {
  __typename?: 'operation_proof_transmitters_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Operation_Proof_Transmitters_Stddev_Pop_Fields = {
  __typename?: 'operation_proof_transmitters_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Operation_Proof_Transmitters_Stddev_Samp_Fields = {
  __typename?: 'operation_proof_transmitters_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Proof_Transmitters_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Proof_Transmitters_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  proof_id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type Operation_Proof_Transmitters_Sum_Fields = {
  __typename?: 'operation_proof_transmitters_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Sum_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Operation_Proof_Transmitters_Var_Pop_Fields = {
  __typename?: 'operation_proof_transmitters_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Operation_Proof_Transmitters_Var_Samp_Fields = {
  __typename?: 'operation_proof_transmitters_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Operation_Proof_Transmitters_Variance_Fields = {
  __typename?: 'operation_proof_transmitters_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "operation_proof_transmitters" */
export type Operation_Proof_Transmitters_Variance_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Operation_Proof_Var_Pop_Fields = {
  __typename?: 'operation_proof_var_pop_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Operation_Proof_Var_Samp_Fields = {
  __typename?: 'operation_proof_var_samp_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Operation_Proof_Variance_Fields = {
  __typename?: 'operation_proof_variance_fields'
  approveblocknumber?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  op_id?: Maybe<Scalars['Float']['output']>
  proofscount?: Maybe<Scalars['Float']['output']>
  round?: Maybe<Scalars['Float']['output']>
  watchersproofcount?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "operation_proof_watchers" */
export type Operation_Proof_Watchers = {
  __typename?: 'operation_proof_watchers'
  address: Scalars['String']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  operation_proof: Operation_Proof
  proof_id: Scalars['Int']['output']
}

/** aggregated selection of "operation_proof_watchers" */
export type Operation_Proof_Watchers_Aggregate = {
  __typename?: 'operation_proof_watchers_aggregate'
  aggregate?: Maybe<Operation_Proof_Watchers_Aggregate_Fields>
  nodes: Array<Operation_Proof_Watchers>
}

export type Operation_Proof_Watchers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Operation_Proof_Watchers_Aggregate_Bool_Exp_Count>
}

export type Operation_Proof_Watchers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "operation_proof_watchers" */
export type Operation_Proof_Watchers_Aggregate_Fields = {
  __typename?: 'operation_proof_watchers_aggregate_fields'
  avg?: Maybe<Operation_Proof_Watchers_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Proof_Watchers_Max_Fields>
  min?: Maybe<Operation_Proof_Watchers_Min_Fields>
  stddev?: Maybe<Operation_Proof_Watchers_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Proof_Watchers_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Proof_Watchers_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Proof_Watchers_Sum_Fields>
  var_pop?: Maybe<Operation_Proof_Watchers_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Proof_Watchers_Var_Samp_Fields>
  variance?: Maybe<Operation_Proof_Watchers_Variance_Fields>
}

/** aggregate fields of "operation_proof_watchers" */
export type Operation_Proof_Watchers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Aggregate_Order_By = {
  avg?: InputMaybe<Operation_Proof_Watchers_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Operation_Proof_Watchers_Max_Order_By>
  min?: InputMaybe<Operation_Proof_Watchers_Min_Order_By>
  stddev?: InputMaybe<Operation_Proof_Watchers_Stddev_Order_By>
  stddev_pop?: InputMaybe<Operation_Proof_Watchers_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Operation_Proof_Watchers_Stddev_Samp_Order_By>
  sum?: InputMaybe<Operation_Proof_Watchers_Sum_Order_By>
  var_pop?: InputMaybe<Operation_Proof_Watchers_Var_Pop_Order_By>
  var_samp?: InputMaybe<Operation_Proof_Watchers_Var_Samp_Order_By>
  variance?: InputMaybe<Operation_Proof_Watchers_Variance_Order_By>
}

/** aggregate avg on columns */
export type Operation_Proof_Watchers_Avg_Fields = {
  __typename?: 'operation_proof_watchers_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Avg_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "operation_proof_watchers". All fields are combined with a logical 'AND'. */
export type Operation_Proof_Watchers_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Proof_Watchers_Bool_Exp>>
  _not?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Proof_Watchers_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  operation_proof?: InputMaybe<Operation_Proof_Bool_Exp>
  proof_id?: InputMaybe<Int_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Proof_Watchers_Max_Fields = {
  __typename?: 'operation_proof_watchers_max_fields'
  address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by max() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Max_Order_By = {
  address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Operation_Proof_Watchers_Min_Fields = {
  __typename?: 'operation_proof_watchers_min_fields'
  address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by min() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Min_Order_By = {
  address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "operation_proof_watchers". */
export type Operation_Proof_Watchers_Order_By = {
  address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  operation_proof?: InputMaybe<Operation_Proof_Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** select columns of table "operation_proof_watchers" */
export enum Operation_Proof_Watchers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  ProofId = 'proof_id',
}

/** aggregate stddev on columns */
export type Operation_Proof_Watchers_Stddev_Fields = {
  __typename?: 'operation_proof_watchers_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Operation_Proof_Watchers_Stddev_Pop_Fields = {
  __typename?: 'operation_proof_watchers_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Operation_Proof_Watchers_Stddev_Samp_Fields = {
  __typename?: 'operation_proof_watchers_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Proof_Watchers_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Proof_Watchers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  proof_id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate sum on columns */
export type Operation_Proof_Watchers_Sum_Fields = {
  __typename?: 'operation_proof_watchers_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
  proof_id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Sum_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Operation_Proof_Watchers_Var_Pop_Fields = {
  __typename?: 'operation_proof_watchers_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Operation_Proof_Watchers_Var_Samp_Fields = {
  __typename?: 'operation_proof_watchers_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Operation_Proof_Watchers_Variance_Fields = {
  __typename?: 'operation_proof_watchers_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
  proof_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "operation_proof_watchers" */
export type Operation_Proof_Watchers_Variance_Order_By = {
  id?: InputMaybe<Order_By>
  proof_id?: InputMaybe<Order_By>
}

/** columns and relationships of "operation_total_count_agent_address" */
export type Operation_Total_Count_Agent_Address = {
  __typename?: 'operation_total_count_agent_address'
  agent_address?: Maybe<Scalars['String']['output']>
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregated selection of "operation_total_count_agent_address" */
export type Operation_Total_Count_Agent_Address_Aggregate = {
  __typename?: 'operation_total_count_agent_address_aggregate'
  aggregate?: Maybe<Operation_Total_Count_Agent_Address_Aggregate_Fields>
  nodes: Array<Operation_Total_Count_Agent_Address>
}

/** aggregate fields of "operation_total_count_agent_address" */
export type Operation_Total_Count_Agent_Address_Aggregate_Fields = {
  __typename?: 'operation_total_count_agent_address_aggregate_fields'
  avg?: Maybe<Operation_Total_Count_Agent_Address_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operation_Total_Count_Agent_Address_Max_Fields>
  min?: Maybe<Operation_Total_Count_Agent_Address_Min_Fields>
  stddev?: Maybe<Operation_Total_Count_Agent_Address_Stddev_Fields>
  stddev_pop?: Maybe<Operation_Total_Count_Agent_Address_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operation_Total_Count_Agent_Address_Stddev_Samp_Fields>
  sum?: Maybe<Operation_Total_Count_Agent_Address_Sum_Fields>
  var_pop?: Maybe<Operation_Total_Count_Agent_Address_Var_Pop_Fields>
  var_samp?: Maybe<Operation_Total_Count_Agent_Address_Var_Samp_Fields>
  variance?: Maybe<Operation_Total_Count_Agent_Address_Variance_Fields>
}

/** aggregate fields of "operation_total_count_agent_address" */
export type Operation_Total_Count_Agent_Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Operation_Total_Count_Agent_Address_Avg_Fields = {
  __typename?: 'operation_total_count_agent_address_avg_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "operation_total_count_agent_address". All fields are combined with a logical 'AND'. */
export type Operation_Total_Count_Agent_Address_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Bool_Exp>>
  _not?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
  _or?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Bool_Exp>>
  agent_address?: InputMaybe<String_Comparison_Exp>
  msg_count?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Operation_Total_Count_Agent_Address_Max_Fields = {
  __typename?: 'operation_total_count_agent_address_max_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregate min on columns */
export type Operation_Total_Count_Agent_Address_Min_Fields = {
  __typename?: 'operation_total_count_agent_address_min_fields'
  agent_address?: Maybe<Scalars['String']['output']>
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** Ordering options when selecting data from "operation_total_count_agent_address". */
export type Operation_Total_Count_Agent_Address_Order_By = {
  agent_address?: InputMaybe<Order_By>
  msg_count?: InputMaybe<Order_By>
}

/** select columns of table "operation_total_count_agent_address" */
export enum Operation_Total_Count_Agent_Address_Select_Column {
  /** column name */
  AgentAddress = 'agent_address',
  /** column name */
  MsgCount = 'msg_count',
}

/** aggregate stddev on columns */
export type Operation_Total_Count_Agent_Address_Stddev_Fields = {
  __typename?: 'operation_total_count_agent_address_stddev_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Operation_Total_Count_Agent_Address_Stddev_Pop_Fields = {
  __typename?: 'operation_total_count_agent_address_stddev_pop_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Operation_Total_Count_Agent_Address_Stddev_Samp_Fields = {
  __typename?: 'operation_total_count_agent_address_stddev_samp_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "operation_total_count_agent_address" */
export type Operation_Total_Count_Agent_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operation_Total_Count_Agent_Address_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operation_Total_Count_Agent_Address_Stream_Cursor_Value_Input = {
  agent_address?: InputMaybe<Scalars['String']['input']>
  msg_count?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Operation_Total_Count_Agent_Address_Sum_Fields = {
  __typename?: 'operation_total_count_agent_address_sum_fields'
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Operation_Total_Count_Agent_Address_Var_Pop_Fields = {
  __typename?: 'operation_total_count_agent_address_var_pop_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Operation_Total_Count_Agent_Address_Var_Samp_Fields = {
  __typename?: 'operation_total_count_agent_address_var_samp_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Operation_Total_Count_Agent_Address_Variance_Fields = {
  __typename?: 'operation_total_count_agent_address_variance_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "operations" */
export type Operations = {
  __typename?: 'operations'
  /** An array relationship */
  bets: Array<Bets>
  /** An aggregate relationship */
  bets_aggregate: Bets_Aggregate
  created_at: Scalars['timestamp']['output']
  delivered: Scalars['Boolean']['output']
  destination_tx_hash: Scalars['String']['output']
  dst_chain_id: Scalars['numeric']['output']
  failed: Scalars['Boolean']['output']
  function_selector: Scalars['String']['output']
  hash: Scalars['String']['output']
  id: Scalars['Int']['output']
  in_order: Scalars['Boolean']['output']
  /** An object relationship */
  is_inflight?: Maybe<Operation_Is_Inflight>
  nonce: Scalars['numeric']['output']
  /** An object relationship */
  operation_proof?: Maybe<Operation_Proof>
  params: Scalars['String']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_address: Scalars['String']['output']
  protocol_id: Scalars['String']['output']
  required_confirmations: Scalars['Int']['output']
  src_block_number: Scalars['numeric']['output']
  src_chain_id: Scalars['numeric']['output']
  src_tx_hash: Scalars['String']['output']
  src_tx_sender: Scalars['String']['output']
  /** An array relationship */
  user_entangle_bridge_operations: Array<User_Entangle_Bridge_Operations>
  /** An aggregate relationship */
  user_entangle_bridge_operations_aggregate: User_Entangle_Bridge_Operations_Aggregate
}

/** columns and relationships of "operations" */
export type OperationsBetsArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

/** columns and relationships of "operations" */
export type OperationsBets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

/** columns and relationships of "operations" */
export type OperationsUser_Entangle_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

/** columns and relationships of "operations" */
export type OperationsUser_Entangle_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

/** aggregated selection of "operations" */
export type Operations_Aggregate = {
  __typename?: 'operations_aggregate'
  aggregate?: Maybe<Operations_Aggregate_Fields>
  nodes: Array<Operations>
}

export type Operations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Operations_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Operations_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Operations_Aggregate_Bool_Exp_Count>
}

export type Operations_Aggregate_Bool_Exp_Bool_And = {
  arguments: Operations_Select_Column_Operations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Operations_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Operations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Operations_Select_Column_Operations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Operations_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Operations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Operations_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "operations" */
export type Operations_Aggregate_Fields = {
  __typename?: 'operations_aggregate_fields'
  avg?: Maybe<Operations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operations_Max_Fields>
  min?: Maybe<Operations_Min_Fields>
  stddev?: Maybe<Operations_Stddev_Fields>
  stddev_pop?: Maybe<Operations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operations_Stddev_Samp_Fields>
  sum?: Maybe<Operations_Sum_Fields>
  var_pop?: Maybe<Operations_Var_Pop_Fields>
  var_samp?: Maybe<Operations_Var_Samp_Fields>
  variance?: Maybe<Operations_Variance_Fields>
}

/** aggregate fields of "operations" */
export type Operations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "operations" */
export type Operations_Aggregate_Order_By = {
  avg?: InputMaybe<Operations_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Operations_Max_Order_By>
  min?: InputMaybe<Operations_Min_Order_By>
  stddev?: InputMaybe<Operations_Stddev_Order_By>
  stddev_pop?: InputMaybe<Operations_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Operations_Stddev_Samp_Order_By>
  sum?: InputMaybe<Operations_Sum_Order_By>
  var_pop?: InputMaybe<Operations_Var_Pop_Order_By>
  var_samp?: InputMaybe<Operations_Var_Samp_Order_By>
  variance?: InputMaybe<Operations_Variance_Order_By>
}

/** aggregate avg on columns */
export type Operations_Avg_Fields = {
  __typename?: 'operations_avg_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "operations" */
export type Operations_Avg_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "operations". All fields are combined with a logical 'AND'. */
export type Operations_Bool_Exp = {
  _and?: InputMaybe<Array<Operations_Bool_Exp>>
  _not?: InputMaybe<Operations_Bool_Exp>
  _or?: InputMaybe<Array<Operations_Bool_Exp>>
  bets?: InputMaybe<Bets_Bool_Exp>
  bets_aggregate?: InputMaybe<Bets_Aggregate_Bool_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  delivered?: InputMaybe<Boolean_Comparison_Exp>
  destination_tx_hash?: InputMaybe<String_Comparison_Exp>
  dst_chain_id?: InputMaybe<Numeric_Comparison_Exp>
  failed?: InputMaybe<Boolean_Comparison_Exp>
  function_selector?: InputMaybe<String_Comparison_Exp>
  hash?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  in_order?: InputMaybe<Boolean_Comparison_Exp>
  is_inflight?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
  nonce?: InputMaybe<Numeric_Comparison_Exp>
  operation_proof?: InputMaybe<Operation_Proof_Bool_Exp>
  params?: InputMaybe<String_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_address?: InputMaybe<String_Comparison_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  required_confirmations?: InputMaybe<Int_Comparison_Exp>
  src_block_number?: InputMaybe<Numeric_Comparison_Exp>
  src_chain_id?: InputMaybe<Numeric_Comparison_Exp>
  src_tx_hash?: InputMaybe<String_Comparison_Exp>
  src_tx_sender?: InputMaybe<String_Comparison_Exp>
  user_entangle_bridge_operations?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
  user_entangle_bridge_operations_aggregate?: InputMaybe<User_Entangle_Bridge_Operations_Aggregate_Bool_Exp>
}

/** columns and relationships of "operations_count_by_protocol" */
export type Operations_Count_By_Protocol = {
  __typename?: 'operations_count_by_protocol'
  count?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "operations_count_by_protocol" */
export type Operations_Count_By_Protocol_Aggregate = {
  __typename?: 'operations_count_by_protocol_aggregate'
  aggregate?: Maybe<Operations_Count_By_Protocol_Aggregate_Fields>
  nodes: Array<Operations_Count_By_Protocol>
}

/** aggregate fields of "operations_count_by_protocol" */
export type Operations_Count_By_Protocol_Aggregate_Fields = {
  __typename?: 'operations_count_by_protocol_aggregate_fields'
  avg?: Maybe<Operations_Count_By_Protocol_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Operations_Count_By_Protocol_Max_Fields>
  min?: Maybe<Operations_Count_By_Protocol_Min_Fields>
  stddev?: Maybe<Operations_Count_By_Protocol_Stddev_Fields>
  stddev_pop?: Maybe<Operations_Count_By_Protocol_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Operations_Count_By_Protocol_Stddev_Samp_Fields>
  sum?: Maybe<Operations_Count_By_Protocol_Sum_Fields>
  var_pop?: Maybe<Operations_Count_By_Protocol_Var_Pop_Fields>
  var_samp?: Maybe<Operations_Count_By_Protocol_Var_Samp_Fields>
  variance?: Maybe<Operations_Count_By_Protocol_Variance_Fields>
}

/** aggregate fields of "operations_count_by_protocol" */
export type Operations_Count_By_Protocol_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operations_Count_By_Protocol_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Operations_Count_By_Protocol_Avg_Fields = {
  __typename?: 'operations_count_by_protocol_avg_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "operations_count_by_protocol". All fields are combined with a logical 'AND'. */
export type Operations_Count_By_Protocol_Bool_Exp = {
  _and?: InputMaybe<Array<Operations_Count_By_Protocol_Bool_Exp>>
  _not?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
  _or?: InputMaybe<Array<Operations_Count_By_Protocol_Bool_Exp>>
  count?: InputMaybe<Bigint_Comparison_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Operations_Count_By_Protocol_Max_Fields = {
  __typename?: 'operations_count_by_protocol_max_fields'
  count?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Operations_Count_By_Protocol_Min_Fields = {
  __typename?: 'operations_count_by_protocol_min_fields'
  count?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "operations_count_by_protocol". */
export type Operations_Count_By_Protocol_Order_By = {
  count?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** select columns of table "operations_count_by_protocol" */
export enum Operations_Count_By_Protocol_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  ProtocolId = 'protocol_id',
}

/** aggregate stddev on columns */
export type Operations_Count_By_Protocol_Stddev_Fields = {
  __typename?: 'operations_count_by_protocol_stddev_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Operations_Count_By_Protocol_Stddev_Pop_Fields = {
  __typename?: 'operations_count_by_protocol_stddev_pop_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Operations_Count_By_Protocol_Stddev_Samp_Fields = {
  __typename?: 'operations_count_by_protocol_stddev_samp_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "operations_count_by_protocol" */
export type Operations_Count_By_Protocol_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operations_Count_By_Protocol_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operations_Count_By_Protocol_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Operations_Count_By_Protocol_Sum_Fields = {
  __typename?: 'operations_count_by_protocol_sum_fields'
  count?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Operations_Count_By_Protocol_Var_Pop_Fields = {
  __typename?: 'operations_count_by_protocol_var_pop_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Operations_Count_By_Protocol_Var_Samp_Fields = {
  __typename?: 'operations_count_by_protocol_var_samp_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Operations_Count_By_Protocol_Variance_Fields = {
  __typename?: 'operations_count_by_protocol_variance_fields'
  count?: Maybe<Scalars['Float']['output']>
}

/** aggregate max on columns */
export type Operations_Max_Fields = {
  __typename?: 'operations_max_fields'
  created_at?: Maybe<Scalars['timestamp']['output']>
  destination_tx_hash?: Maybe<Scalars['String']['output']>
  dst_chain_id?: Maybe<Scalars['numeric']['output']>
  function_selector?: Maybe<Scalars['String']['output']>
  hash?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  nonce?: Maybe<Scalars['numeric']['output']>
  params?: Maybe<Scalars['String']['output']>
  protocol_address?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  required_confirmations?: Maybe<Scalars['Int']['output']>
  src_block_number?: Maybe<Scalars['numeric']['output']>
  src_chain_id?: Maybe<Scalars['numeric']['output']>
  src_tx_hash?: Maybe<Scalars['String']['output']>
  src_tx_sender?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "operations" */
export type Operations_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  destination_tx_hash?: InputMaybe<Order_By>
  dst_chain_id?: InputMaybe<Order_By>
  function_selector?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
  protocol_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
  src_tx_hash?: InputMaybe<Order_By>
  src_tx_sender?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Operations_Min_Fields = {
  __typename?: 'operations_min_fields'
  created_at?: Maybe<Scalars['timestamp']['output']>
  destination_tx_hash?: Maybe<Scalars['String']['output']>
  dst_chain_id?: Maybe<Scalars['numeric']['output']>
  function_selector?: Maybe<Scalars['String']['output']>
  hash?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  nonce?: Maybe<Scalars['numeric']['output']>
  params?: Maybe<Scalars['String']['output']>
  protocol_address?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  required_confirmations?: Maybe<Scalars['Int']['output']>
  src_block_number?: Maybe<Scalars['numeric']['output']>
  src_chain_id?: Maybe<Scalars['numeric']['output']>
  src_tx_hash?: Maybe<Scalars['String']['output']>
  src_tx_sender?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "operations" */
export type Operations_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  destination_tx_hash?: InputMaybe<Order_By>
  dst_chain_id?: InputMaybe<Order_By>
  function_selector?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
  protocol_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
  src_tx_hash?: InputMaybe<Order_By>
  src_tx_sender?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "operations". */
export type Operations_Order_By = {
  bets_aggregate?: InputMaybe<Bets_Aggregate_Order_By>
  created_at?: InputMaybe<Order_By>
  delivered?: InputMaybe<Order_By>
  destination_tx_hash?: InputMaybe<Order_By>
  dst_chain_id?: InputMaybe<Order_By>
  failed?: InputMaybe<Order_By>
  function_selector?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  in_order?: InputMaybe<Order_By>
  is_inflight?: InputMaybe<Operation_Is_Inflight_Order_By>
  nonce?: InputMaybe<Order_By>
  operation_proof?: InputMaybe<Operation_Proof_Order_By>
  params?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
  src_tx_hash?: InputMaybe<Order_By>
  src_tx_sender?: InputMaybe<Order_By>
  user_entangle_bridge_operations_aggregate?: InputMaybe<User_Entangle_Bridge_Operations_Aggregate_Order_By>
}

/** select columns of table "operations" */
export enum Operations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delivered = 'delivered',
  /** column name */
  DestinationTxHash = 'destination_tx_hash',
  /** column name */
  DstChainId = 'dst_chain_id',
  /** column name */
  Failed = 'failed',
  /** column name */
  FunctionSelector = 'function_selector',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  InOrder = 'in_order',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  Params = 'params',
  /** column name */
  ProtocolAddress = 'protocol_address',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  RequiredConfirmations = 'required_confirmations',
  /** column name */
  SrcBlockNumber = 'src_block_number',
  /** column name */
  SrcChainId = 'src_chain_id',
  /** column name */
  SrcTxHash = 'src_tx_hash',
  /** column name */
  SrcTxSender = 'src_tx_sender',
}

/** select "operations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "operations" */
export enum Operations_Select_Column_Operations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Delivered = 'delivered',
  /** column name */
  Failed = 'failed',
  /** column name */
  InOrder = 'in_order',
}

/** select "operations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "operations" */
export enum Operations_Select_Column_Operations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Delivered = 'delivered',
  /** column name */
  Failed = 'failed',
  /** column name */
  InOrder = 'in_order',
}

/** aggregate stddev on columns */
export type Operations_Stddev_Fields = {
  __typename?: 'operations_stddev_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "operations" */
export type Operations_Stddev_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Operations_Stddev_Pop_Fields = {
  __typename?: 'operations_stddev_pop_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "operations" */
export type Operations_Stddev_Pop_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Operations_Stddev_Samp_Fields = {
  __typename?: 'operations_stddev_samp_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "operations" */
export type Operations_Stddev_Samp_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "operations" */
export type Operations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Operations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  delivered?: InputMaybe<Scalars['Boolean']['input']>
  destination_tx_hash?: InputMaybe<Scalars['String']['input']>
  dst_chain_id?: InputMaybe<Scalars['numeric']['input']>
  failed?: InputMaybe<Scalars['Boolean']['input']>
  function_selector?: InputMaybe<Scalars['String']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  in_order?: InputMaybe<Scalars['Boolean']['input']>
  nonce?: InputMaybe<Scalars['numeric']['input']>
  params?: InputMaybe<Scalars['String']['input']>
  protocol_address?: InputMaybe<Scalars['String']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  required_confirmations?: InputMaybe<Scalars['Int']['input']>
  src_block_number?: InputMaybe<Scalars['numeric']['input']>
  src_chain_id?: InputMaybe<Scalars['numeric']['input']>
  src_tx_hash?: InputMaybe<Scalars['String']['input']>
  src_tx_sender?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Operations_Sum_Fields = {
  __typename?: 'operations_sum_fields'
  dst_chain_id?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  nonce?: Maybe<Scalars['numeric']['output']>
  required_confirmations?: Maybe<Scalars['Int']['output']>
  src_block_number?: Maybe<Scalars['numeric']['output']>
  src_chain_id?: Maybe<Scalars['numeric']['output']>
}

/** order by sum() on columns of table "operations" */
export type Operations_Sum_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Operations_Var_Pop_Fields = {
  __typename?: 'operations_var_pop_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "operations" */
export type Operations_Var_Pop_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Operations_Var_Samp_Fields = {
  __typename?: 'operations_var_samp_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "operations" */
export type Operations_Var_Samp_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Operations_Variance_Fields = {
  __typename?: 'operations_variance_fields'
  dst_chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  nonce?: Maybe<Scalars['Float']['output']>
  required_confirmations?: Maybe<Scalars['Float']['output']>
  src_block_number?: Maybe<Scalars['Float']['output']>
  src_chain_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "operations" */
export type Operations_Variance_Order_By = {
  dst_chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  nonce?: InputMaybe<Order_By>
  required_confirmations?: InputMaybe<Order_By>
  src_block_number?: InputMaybe<Order_By>
  src_chain_id?: InputMaybe<Order_By>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit'
  height: Scalars['bigint']['output']
  proposer_priority: Scalars['bigint']['output']
  timestamp: Scalars['timestamp']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
  voting_power: Scalars['bigint']['output']
}

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate'
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>
  nodes: Array<Pre_Commit>
}

export type Pre_Commit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp_Count>
}

export type Pre_Commit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pre_Commit_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Pre_Commit_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields'
  avg?: Maybe<Pre_Commit_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Pre_Commit_Max_Fields>
  min?: Maybe<Pre_Commit_Min_Fields>
  stddev?: Maybe<Pre_Commit_Stddev_Fields>
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>
  sum?: Maybe<Pre_Commit_Sum_Fields>
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>
  variance?: Maybe<Pre_Commit_Variance_Fields>
}

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pre_Commit_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Pre_Commit_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Pre_Commit_Max_Order_By>
  min?: InputMaybe<Pre_Commit_Min_Order_By>
  stddev?: InputMaybe<Pre_Commit_Stddev_Order_By>
  stddev_pop?: InputMaybe<Pre_Commit_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Pre_Commit_Stddev_Samp_Order_By>
  sum?: InputMaybe<Pre_Commit_Sum_Order_By>
  var_pop?: InputMaybe<Pre_Commit_Var_Pop_Order_By>
  var_samp?: InputMaybe<Pre_Commit_Var_Samp_Order_By>
  variance?: InputMaybe<Pre_Commit_Variance_Order_By>
}

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Pre_Commit_Bool_Exp>>
  _not?: InputMaybe<Pre_Commit_Bool_Exp>
  _or?: InputMaybe<Array<Pre_Commit_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields'
  height?: Maybe<Scalars['bigint']['output']>
  proposer_priority?: Maybe<Scalars['bigint']['output']>
  timestamp?: Maybe<Scalars['timestamp']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['bigint']['output']>
}

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields'
  height?: Maybe<Scalars['bigint']['output']>
  proposer_priority?: Maybe<Scalars['bigint']['output']>
  timestamp?: Maybe<Scalars['timestamp']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['bigint']['output']>
}

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power',
}

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "pre_commit" */
export type Pre_Commit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pre_Commit_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Pre_Commit_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  proposer_priority?: InputMaybe<Scalars['bigint']['input']>
  timestamp?: InputMaybe<Scalars['timestamp']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
  voting_power?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
  proposer_priority?: Maybe<Scalars['bigint']['output']>
  voting_power?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposer_priority?: Maybe<Scalars['Float']['output']>
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposer_priority?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** columns and relationships of "price_charts" */
export type Price_Charts = {
  __typename?: 'price_charts'
  asset_id?: Maybe<Scalars['bigint']['output']>
  /** An object relationship */
  assets_info?: Maybe<Assets_Info>
  /** An object relationship */
  category?: Maybe<Category>
  category_id?: Maybe<Scalars['Int']['output']>
  chart?: Maybe<Scalars['String']['output']>
  data_key?: Maybe<Scalars['String']['output']>
  /** An object relationship */
  source_origination?: Maybe<Source_Origination>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
  time?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "price_charts" */
export type Price_Charts_Aggregate = {
  __typename?: 'price_charts_aggregate'
  aggregate?: Maybe<Price_Charts_Aggregate_Fields>
  nodes: Array<Price_Charts>
}

/** aggregate fields of "price_charts" */
export type Price_Charts_Aggregate_Fields = {
  __typename?: 'price_charts_aggregate_fields'
  avg?: Maybe<Price_Charts_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Price_Charts_Max_Fields>
  min?: Maybe<Price_Charts_Min_Fields>
  stddev?: Maybe<Price_Charts_Stddev_Fields>
  stddev_pop?: Maybe<Price_Charts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Price_Charts_Stddev_Samp_Fields>
  sum?: Maybe<Price_Charts_Sum_Fields>
  var_pop?: Maybe<Price_Charts_Var_Pop_Fields>
  var_samp?: Maybe<Price_Charts_Var_Samp_Fields>
  variance?: Maybe<Price_Charts_Variance_Fields>
}

/** aggregate fields of "price_charts" */
export type Price_Charts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_Charts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Price_Charts_Avg_Fields = {
  __typename?: 'price_charts_avg_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "price_charts". All fields are combined with a logical 'AND'. */
export type Price_Charts_Bool_Exp = {
  _and?: InputMaybe<Array<Price_Charts_Bool_Exp>>
  _not?: InputMaybe<Price_Charts_Bool_Exp>
  _or?: InputMaybe<Array<Price_Charts_Bool_Exp>>
  asset_id?: InputMaybe<Bigint_Comparison_Exp>
  assets_info?: InputMaybe<Assets_Info_Bool_Exp>
  category?: InputMaybe<Category_Bool_Exp>
  category_id?: InputMaybe<Int_Comparison_Exp>
  chart?: InputMaybe<String_Comparison_Exp>
  data_key?: InputMaybe<String_Comparison_Exp>
  source_origination?: InputMaybe<Source_Origination_Bool_Exp>
  source_origination_id?: InputMaybe<Bigint_Comparison_Exp>
  time?: InputMaybe<Timestamptz_Comparison_Exp>
  value?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Price_Charts_Max_Fields = {
  __typename?: 'price_charts_max_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  category_id?: Maybe<Scalars['Int']['output']>
  chart?: Maybe<Scalars['String']['output']>
  data_key?: Maybe<Scalars['String']['output']>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
  time?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Price_Charts_Min_Fields = {
  __typename?: 'price_charts_min_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  category_id?: Maybe<Scalars['Int']['output']>
  chart?: Maybe<Scalars['String']['output']>
  data_key?: Maybe<Scalars['String']['output']>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
  time?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "price_charts". */
export type Price_Charts_Order_By = {
  asset_id?: InputMaybe<Order_By>
  assets_info?: InputMaybe<Assets_Info_Order_By>
  category?: InputMaybe<Category_Order_By>
  category_id?: InputMaybe<Order_By>
  chart?: InputMaybe<Order_By>
  data_key?: InputMaybe<Order_By>
  source_origination?: InputMaybe<Source_Origination_Order_By>
  source_origination_id?: InputMaybe<Order_By>
  time?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "price_charts" */
export enum Price_Charts_Select_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Chart = 'chart',
  /** column name */
  DataKey = 'data_key',
  /** column name */
  SourceOriginationId = 'source_origination_id',
  /** column name */
  Time = 'time',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Price_Charts_Stddev_Fields = {
  __typename?: 'price_charts_stddev_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Price_Charts_Stddev_Pop_Fields = {
  __typename?: 'price_charts_stddev_pop_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Price_Charts_Stddev_Samp_Fields = {
  __typename?: 'price_charts_stddev_samp_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "price_charts" */
export type Price_Charts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Price_Charts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Price_Charts_Stream_Cursor_Value_Input = {
  asset_id?: InputMaybe<Scalars['bigint']['input']>
  category_id?: InputMaybe<Scalars['Int']['input']>
  chart?: InputMaybe<Scalars['String']['input']>
  data_key?: InputMaybe<Scalars['String']['input']>
  source_origination_id?: InputMaybe<Scalars['bigint']['input']>
  time?: InputMaybe<Scalars['timestamptz']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Price_Charts_Sum_Fields = {
  __typename?: 'price_charts_sum_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  category_id?: Maybe<Scalars['Int']['output']>
  source_origination_id?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Price_Charts_Var_Pop_Fields = {
  __typename?: 'price_charts_var_pop_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Price_Charts_Var_Samp_Fields = {
  __typename?: 'price_charts_var_samp_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Price_Charts_Variance_Fields = {
  __typename?: 'price_charts_variance_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  category_id?: Maybe<Scalars['Float']['output']>
  source_origination_id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "prices" */
export type Prices = {
  __typename?: 'prices'
  asset_id: Scalars['bigint']['output']
  /** An object relationship */
  assets_info?: Maybe<Assets_Info>
  id: Scalars['bigint']['output']
  /** An object relationship */
  source_origination: Source_Origination
  timestamp: Scalars['timestamptz']['output']
  value: Scalars['String']['output']
}

/** aggregated selection of "prices" */
export type Prices_Aggregate = {
  __typename?: 'prices_aggregate'
  aggregate?: Maybe<Prices_Aggregate_Fields>
  nodes: Array<Prices>
}

export type Prices_Aggregate_Bool_Exp = {
  count?: InputMaybe<Prices_Aggregate_Bool_Exp_Count>
}

export type Prices_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Prices_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Prices_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "prices" */
export type Prices_Aggregate_Fields = {
  __typename?: 'prices_aggregate_fields'
  avg?: Maybe<Prices_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Prices_Max_Fields>
  min?: Maybe<Prices_Min_Fields>
  stddev?: Maybe<Prices_Stddev_Fields>
  stddev_pop?: Maybe<Prices_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Prices_Stddev_Samp_Fields>
  sum?: Maybe<Prices_Sum_Fields>
  var_pop?: Maybe<Prices_Var_Pop_Fields>
  var_samp?: Maybe<Prices_Var_Samp_Fields>
  variance?: Maybe<Prices_Variance_Fields>
}

/** aggregate fields of "prices" */
export type Prices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prices_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "prices" */
export type Prices_Aggregate_Order_By = {
  avg?: InputMaybe<Prices_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Prices_Max_Order_By>
  min?: InputMaybe<Prices_Min_Order_By>
  stddev?: InputMaybe<Prices_Stddev_Order_By>
  stddev_pop?: InputMaybe<Prices_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Prices_Stddev_Samp_Order_By>
  sum?: InputMaybe<Prices_Sum_Order_By>
  var_pop?: InputMaybe<Prices_Var_Pop_Order_By>
  var_samp?: InputMaybe<Prices_Var_Samp_Order_By>
  variance?: InputMaybe<Prices_Variance_Order_By>
}

/** aggregate avg on columns */
export type Prices_Avg_Fields = {
  __typename?: 'prices_avg_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "prices" */
export type Prices_Avg_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "prices". All fields are combined with a logical 'AND'. */
export type Prices_Bool_Exp = {
  _and?: InputMaybe<Array<Prices_Bool_Exp>>
  _not?: InputMaybe<Prices_Bool_Exp>
  _or?: InputMaybe<Array<Prices_Bool_Exp>>
  asset_id?: InputMaybe<Bigint_Comparison_Exp>
  assets_info?: InputMaybe<Assets_Info_Bool_Exp>
  id?: InputMaybe<Bigint_Comparison_Exp>
  source_origination?: InputMaybe<Source_Origination_Bool_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
  value?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Prices_Max_Fields = {
  __typename?: 'prices_max_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  timestamp?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "prices" */
export type Prices_Max_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Prices_Min_Fields = {
  __typename?: 'prices_min_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  timestamp?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "prices" */
export type Prices_Min_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "prices". */
export type Prices_Order_By = {
  asset_id?: InputMaybe<Order_By>
  assets_info?: InputMaybe<Assets_Info_Order_By>
  id?: InputMaybe<Order_By>
  source_origination?: InputMaybe<Source_Origination_Order_By>
  timestamp?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "prices" */
export enum Prices_Select_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Prices_Stddev_Fields = {
  __typename?: 'prices_stddev_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "prices" */
export type Prices_Stddev_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Prices_Stddev_Pop_Fields = {
  __typename?: 'prices_stddev_pop_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "prices" */
export type Prices_Stddev_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Prices_Stddev_Samp_Fields = {
  __typename?: 'prices_stddev_samp_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "prices" */
export type Prices_Stddev_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "prices" */
export type Prices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prices_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Prices_Stream_Cursor_Value_Input = {
  asset_id?: InputMaybe<Scalars['bigint']['input']>
  id?: InputMaybe<Scalars['bigint']['input']>
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Prices_Sum_Fields = {
  __typename?: 'prices_sum_fields'
  asset_id?: Maybe<Scalars['bigint']['output']>
  id?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "prices" */
export type Prices_Sum_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Prices_Var_Pop_Fields = {
  __typename?: 'prices_var_pop_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "prices" */
export type Prices_Var_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Prices_Var_Samp_Fields = {
  __typename?: 'prices_var_samp_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "prices" */
export type Prices_Var_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Prices_Variance_Fields = {
  __typename?: 'prices_variance_fields'
  asset_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "prices" */
export type Prices_Variance_Order_By = {
  asset_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal'
  content: Scalars['jsonb']['output']
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  metadata: Scalars['String']['output']
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>
  /** An object relationship */
  proposer: Account
  proposer_address: Scalars['String']['output']
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>
  status?: Maybe<Scalars['String']['output']>
  submit_time: Scalars['timestamp']['output']
  title: Scalars['String']['output']
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>
  voting_end_time?: Maybe<Scalars['timestamp']['output']>
  voting_start_time?: Maybe<Scalars['timestamp']['output']>
}

/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate'
  aggregate?: Maybe<Proposal_Aggregate_Fields>
  nodes: Array<Proposal>
}

export type Proposal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>
}

export type Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Proposal_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields'
  avg?: Maybe<Proposal_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Proposal_Max_Fields>
  min?: Maybe<Proposal_Min_Fields>
  stddev?: Maybe<Proposal_Stddev_Fields>
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>
  sum?: Maybe<Proposal_Sum_Fields>
  var_pop?: Maybe<Proposal_Var_Pop_Fields>
  var_samp?: Maybe<Proposal_Var_Samp_Fields>
  variance?: Maybe<Proposal_Variance_Fields>
}

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Max_Order_By>
  min?: InputMaybe<Proposal_Min_Order_By>
  stddev?: InputMaybe<Proposal_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Variance_Order_By>
}

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>
  _not?: InputMaybe<Proposal_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>
  content?: InputMaybe<Jsonb_Comparison_Exp>
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  metadata?: InputMaybe<String_Comparison_Exp>
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>
  proposer?: InputMaybe<Account_Bool_Exp>
  proposer_address?: InputMaybe<String_Comparison_Exp>
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>
  title?: InputMaybe<String_Comparison_Exp>
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>
}

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit'
  amount?: Maybe<Array<Scalars['coin']['output']>>
  /** An object relationship */
  block?: Maybe<Block>
  /** An object relationship */
  depositor?: Maybe<Account>
  depositor_address?: Maybe<Scalars['String']['output']>
  height: Scalars['bigint']['output']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']['output']
  timestamp?: Maybe<Scalars['timestamp']['output']>
}

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>
}

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>
  amount?: InputMaybe<Coin_Array_Comparison_Exp>
  block?: InputMaybe<Block_Bool_Exp>
  depositor?: InputMaybe<Account_Bool_Exp>
  depositor_address?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
}

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  amount?: InputMaybe<Order_By>
  depositor_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  amount?: InputMaybe<Order_By>
  depositor_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>
  block?: InputMaybe<Block_Order_By>
  depositor?: InputMaybe<Account_Order_By>
  depositor_address?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
}

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
}

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal_deposit" */
export type Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposit_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Array<Scalars['coin']['input']>>
  depositor_address?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  proposal_id?: InputMaybe<Scalars['Int']['input']>
  timestamp?: InputMaybe<Scalars['timestamp']['input']>
}

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields'
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  proposer_address?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
  submit_time?: Maybe<Scalars['timestamp']['output']>
  title?: Maybe<Scalars['String']['output']>
  voting_end_time?: Maybe<Scalars['timestamp']['output']>
  voting_start_time?: Maybe<Scalars['timestamp']['output']>
}

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  submit_time?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  voting_end_time?: InputMaybe<Order_By>
  voting_start_time?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields'
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  proposer_address?: Maybe<Scalars['String']['output']>
  status?: Maybe<Scalars['String']['output']>
  submit_time?: Maybe<Scalars['timestamp']['output']>
  title?: Maybe<Scalars['String']['output']>
  voting_end_time?: Maybe<Scalars['timestamp']['output']>
  voting_start_time?: Maybe<Scalars['timestamp']['output']>
}

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  submit_time?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  voting_end_time?: InputMaybe<Order_By>
  voting_start_time?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: InputMaybe<Order_By>
  deposit_end_time?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  metadata?: InputMaybe<Order_By>
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Order_By>
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>
  proposer?: InputMaybe<Account_Order_By>
  proposer_address?: InputMaybe<Order_By>
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Order_By>
  status?: InputMaybe<Order_By>
  submit_time?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>
  voting_end_time?: InputMaybe<Order_By>
  voting_start_time?: InputMaybe<Order_By>
}

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time',
}

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot'
  bonded_tokens: Scalars['String']['output']
  height: Scalars['bigint']['output']
  not_bonded_tokens: Scalars['String']['output']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']['output']
}

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>
  bonded_tokens?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
}

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  not_bonded_tokens?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id',
}

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>
  proposal_id?: InputMaybe<Scalars['Int']['input']>
}

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  proposer_address?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  submit_time?: InputMaybe<Scalars['timestamp']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>
}

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result'
  abstain: Scalars['String']['output']
  height: Scalars['bigint']['output']
  no: Scalars['String']['output']
  no_with_veto: Scalars['String']['output']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']['output']
  yes: Scalars['String']['output']
}

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>
}

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>
  abstain?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  no?: InputMaybe<String_Comparison_Exp>
  no_with_veto?: InputMaybe<String_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  yes?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  no?: InputMaybe<Order_By>
  no_with_veto?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  yes?: InputMaybe<Order_By>
}

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  no?: InputMaybe<Order_By>
  no_with_veto?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  yes?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  no?: InputMaybe<Order_By>
  no_with_veto?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  yes?: InputMaybe<Order_By>
}

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes',
}

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal_tally_result" */
export type Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Result_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  no?: InputMaybe<Scalars['String']['input']>
  no_with_veto?: InputMaybe<Scalars['String']['input']>
  proposal_id?: InputMaybe<Scalars['Int']['input']>
  yes?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot'
  height: Scalars['bigint']['output']
  jailed: Scalars['Boolean']['output']
  /** An object relationship */
  proposal?: Maybe<Proposal>
  proposal_id?: Maybe<Scalars['Int']['output']>
  status: Scalars['Int']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
  voting_power: Scalars['String']['output']
}

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>
}

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  jailed?: InputMaybe<Boolean_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  status?: InputMaybe<Int_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>
  jailed?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power',
}

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  jailed?: InputMaybe<Scalars['Boolean']['input']>
  proposal_id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
  voting_power?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote'
  /** An object relationship */
  account: Account
  /** An object relationship */
  block?: Maybe<Block>
  height: Scalars['bigint']['output']
  option: Scalars['String']['output']
  /** An object relationship */
  proposal: Proposal
  proposal_id: Scalars['Int']['output']
  timestamp?: Maybe<Scalars['timestamp']['output']>
  voter_address: Scalars['String']['output']
  weight: Scalars['String']['output']
}

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Proposal_Vote_Max_Order_By>
  min?: InputMaybe<Proposal_Vote_Min_Order_By>
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>
}

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  block?: InputMaybe<Block_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  option?: InputMaybe<String_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  voter_address?: InputMaybe<String_Comparison_Exp>
  weight?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>
  option?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  voter_address?: InputMaybe<Order_By>
  weight?: InputMaybe<Order_By>
}

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>
  option?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  voter_address?: InputMaybe<Order_By>
  weight?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>
  block?: InputMaybe<Block_Order_By>
  height?: InputMaybe<Order_By>
  option?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  voter_address?: InputMaybe<Order_By>
  weight?: InputMaybe<Order_By>
}

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address',
  /** column name */
  Weight = 'weight',
}

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "proposal_vote" */
export type Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Vote_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  option?: InputMaybe<Scalars['String']['input']>
  proposal_id?: InputMaybe<Scalars['Int']['input']>
  timestamp?: InputMaybe<Scalars['timestamp']['input']>
  voter_address?: InputMaybe<Scalars['String']['input']>
  weight?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  proposal_id?: InputMaybe<Order_By>
}

/** columns and relationships of "protocol" */
export type Protocol = {
  __typename?: 'protocol'
  /** An array relationship */
  agent_protocol_supports: Array<Agent_Protocol_Support>
  /** An aggregate relationship */
  agent_protocol_supports_aggregate: Agent_Protocol_Support_Aggregate
  balance: Scalars['numeric']['output']
  /** An array relationship */
  bets: Array<Bets>
  /** An aggregate relationship */
  bets_aggregate: Bets_Aggregate
  consensus_target_rate: Scalars['numeric']['output']
  created_at: Scalars['timestamp']['output']
  data_bet_amount: Scalars['numeric']['output']
  data_bet_reward: Scalars['numeric']['output']
  first_data_bet_reward: Scalars['numeric']['output']
  first_msg_bet_reward: Scalars['numeric']['output']
  id: Scalars['Int']['output']
  max_transmitters: Scalars['numeric']['output']
  min_delegate_amount: Scalars['numeric']['output']
  min_personal_amount: Scalars['numeric']['output']
  msg_bet_amount: Scalars['numeric']['output']
  msg_bet_reward: Scalars['numeric']['output']
  /** An array relationship */
  operations: Array<Operations>
  /** An aggregate relationship */
  operations_aggregate: Operations_Aggregate
  /** An object relationship */
  operations_count?: Maybe<Operations_Count_By_Protocol>
  owner: Scalars['String']['output']
  /** An array relationship */
  protocol_addresses: Array<Protocol_Address>
  /** An aggregate relationship */
  protocol_addresses_aggregate: Protocol_Address_Aggregate
  /** An array relationship */
  protocol_executors: Array<Protocol_Executor>
  /** An aggregate relationship */
  protocol_executors_aggregate: Protocol_Executor_Aggregate
  protocol_id: Scalars['String']['output']
  /** An object relationship */
  protocol_id_decoded?: Maybe<Protocol_Id_Decoded>
  /** An array relationship */
  protocol_proposers: Array<Protocol_Proposer>
  /** An aggregate relationship */
  protocol_proposers_aggregate: Protocol_Proposer_Aggregate
  /** An array relationship */
  protocol_transmitters: Array<Protocol_Transmitter>
  /** An aggregate relationship */
  protocol_transmitters_aggregate: Protocol_Transmitter_Aggregate
  /** An array relationship */
  user_entangle_bridge_operations: Array<User_Entangle_Bridge_Operations>
  /** An aggregate relationship */
  user_entangle_bridge_operations_aggregate: User_Entangle_Bridge_Operations_Aggregate
}

/** columns and relationships of "protocol" */
export type ProtocolAgent_Protocol_SupportsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolAgent_Protocol_Supports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolBetsArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolBets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolOperationsArgs = {
  distinct_on?: InputMaybe<Array<Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Order_By>>
  where?: InputMaybe<Operations_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolOperations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Order_By>>
  where?: InputMaybe<Operations_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_AddressesArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Address_Order_By>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_Addresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Address_Order_By>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_ExecutorsArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Executor_Order_By>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_Executors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Executor_Order_By>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_ProposersArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Proposer_Order_By>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_Proposers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Proposer_Order_By>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_TransmittersArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolProtocol_Transmitters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolUser_Entangle_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

/** columns and relationships of "protocol" */
export type ProtocolUser_Entangle_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

/** columns and relationships of "protocol_address" */
export type Protocol_Address = {
  __typename?: 'protocol_address'
  chain_id: Scalars['numeric']['output']
  created_at: Scalars['timestamp']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_address: Scalars['String']['output']
  protocol_id: Scalars['String']['output']
  removed: Scalars['Boolean']['output']
}

/** aggregated selection of "protocol_address" */
export type Protocol_Address_Aggregate = {
  __typename?: 'protocol_address_aggregate'
  aggregate?: Maybe<Protocol_Address_Aggregate_Fields>
  nodes: Array<Protocol_Address>
}

export type Protocol_Address_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Protocol_Address_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Protocol_Address_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Protocol_Address_Aggregate_Bool_Exp_Count>
}

export type Protocol_Address_Aggregate_Bool_Exp_Bool_And = {
  arguments: Protocol_Address_Select_Column_Protocol_Address_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Address_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Address_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Protocol_Address_Select_Column_Protocol_Address_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Address_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Address_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Protocol_Address_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Address_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "protocol_address" */
export type Protocol_Address_Aggregate_Fields = {
  __typename?: 'protocol_address_aggregate_fields'
  avg?: Maybe<Protocol_Address_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Address_Max_Fields>
  min?: Maybe<Protocol_Address_Min_Fields>
  stddev?: Maybe<Protocol_Address_Stddev_Fields>
  stddev_pop?: Maybe<Protocol_Address_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Protocol_Address_Stddev_Samp_Fields>
  sum?: Maybe<Protocol_Address_Sum_Fields>
  var_pop?: Maybe<Protocol_Address_Var_Pop_Fields>
  var_samp?: Maybe<Protocol_Address_Var_Samp_Fields>
  variance?: Maybe<Protocol_Address_Variance_Fields>
}

/** aggregate fields of "protocol_address" */
export type Protocol_Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Address_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "protocol_address" */
export type Protocol_Address_Aggregate_Order_By = {
  avg?: InputMaybe<Protocol_Address_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Protocol_Address_Max_Order_By>
  min?: InputMaybe<Protocol_Address_Min_Order_By>
  stddev?: InputMaybe<Protocol_Address_Stddev_Order_By>
  stddev_pop?: InputMaybe<Protocol_Address_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Protocol_Address_Stddev_Samp_Order_By>
  sum?: InputMaybe<Protocol_Address_Sum_Order_By>
  var_pop?: InputMaybe<Protocol_Address_Var_Pop_Order_By>
  var_samp?: InputMaybe<Protocol_Address_Var_Samp_Order_By>
  variance?: InputMaybe<Protocol_Address_Variance_Order_By>
}

/** aggregate avg on columns */
export type Protocol_Address_Avg_Fields = {
  __typename?: 'protocol_address_avg_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "protocol_address" */
export type Protocol_Address_Avg_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "protocol_address". All fields are combined with a logical 'AND'. */
export type Protocol_Address_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Address_Bool_Exp>>
  _not?: InputMaybe<Protocol_Address_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Address_Bool_Exp>>
  chain_id?: InputMaybe<Numeric_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_address?: InputMaybe<String_Comparison_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  removed?: InputMaybe<Boolean_Comparison_Exp>
}

/** aggregate max on columns */
export type Protocol_Address_Max_Fields = {
  __typename?: 'protocol_address_max_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_address?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "protocol_address" */
export type Protocol_Address_Max_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Protocol_Address_Min_Fields = {
  __typename?: 'protocol_address_min_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_address?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "protocol_address" */
export type Protocol_Address_Min_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "protocol_address". */
export type Protocol_Address_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  removed?: InputMaybe<Order_By>
}

/** select columns of table "protocol_address" */
export enum Protocol_Address_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProtocolAddress = 'protocol_address',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Removed = 'removed',
}

/** select "protocol_address_aggregate_bool_exp_bool_and_arguments_columns" columns of table "protocol_address" */
export enum Protocol_Address_Select_Column_Protocol_Address_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** select "protocol_address_aggregate_bool_exp_bool_or_arguments_columns" columns of table "protocol_address" */
export enum Protocol_Address_Select_Column_Protocol_Address_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** aggregate stddev on columns */
export type Protocol_Address_Stddev_Fields = {
  __typename?: 'protocol_address_stddev_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "protocol_address" */
export type Protocol_Address_Stddev_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Protocol_Address_Stddev_Pop_Fields = {
  __typename?: 'protocol_address_stddev_pop_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "protocol_address" */
export type Protocol_Address_Stddev_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Protocol_Address_Stddev_Samp_Fields = {
  __typename?: 'protocol_address_stddev_samp_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "protocol_address" */
export type Protocol_Address_Stddev_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "protocol_address" */
export type Protocol_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Address_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Address_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['numeric']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  protocol_address?: InputMaybe<Scalars['String']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  removed?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate sum on columns */
export type Protocol_Address_Sum_Fields = {
  __typename?: 'protocol_address_sum_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "protocol_address" */
export type Protocol_Address_Sum_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Protocol_Address_Var_Pop_Fields = {
  __typename?: 'protocol_address_var_pop_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "protocol_address" */
export type Protocol_Address_Var_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Protocol_Address_Var_Samp_Fields = {
  __typename?: 'protocol_address_var_samp_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "protocol_address" */
export type Protocol_Address_Var_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Protocol_Address_Variance_Fields = {
  __typename?: 'protocol_address_variance_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "protocol_address" */
export type Protocol_Address_Variance_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregated selection of "protocol" */
export type Protocol_Aggregate = {
  __typename?: 'protocol_aggregate'
  aggregate?: Maybe<Protocol_Aggregate_Fields>
  nodes: Array<Protocol>
}

/** aggregate fields of "protocol" */
export type Protocol_Aggregate_Fields = {
  __typename?: 'protocol_aggregate_fields'
  avg?: Maybe<Protocol_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Max_Fields>
  min?: Maybe<Protocol_Min_Fields>
  stddev?: Maybe<Protocol_Stddev_Fields>
  stddev_pop?: Maybe<Protocol_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Protocol_Stddev_Samp_Fields>
  sum?: Maybe<Protocol_Sum_Fields>
  var_pop?: Maybe<Protocol_Var_Pop_Fields>
  var_samp?: Maybe<Protocol_Var_Samp_Fields>
  variance?: Maybe<Protocol_Variance_Fields>
}

/** aggregate fields of "protocol" */
export type Protocol_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Protocol_Avg_Fields = {
  __typename?: 'protocol_avg_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "protocol". All fields are combined with a logical 'AND'. */
export type Protocol_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Bool_Exp>>
  _not?: InputMaybe<Protocol_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Bool_Exp>>
  agent_protocol_supports?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
  agent_protocol_supports_aggregate?: InputMaybe<Agent_Protocol_Support_Aggregate_Bool_Exp>
  balance?: InputMaybe<Numeric_Comparison_Exp>
  bets?: InputMaybe<Bets_Bool_Exp>
  bets_aggregate?: InputMaybe<Bets_Aggregate_Bool_Exp>
  consensus_target_rate?: InputMaybe<Numeric_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  data_bet_amount?: InputMaybe<Numeric_Comparison_Exp>
  data_bet_reward?: InputMaybe<Numeric_Comparison_Exp>
  first_data_bet_reward?: InputMaybe<Numeric_Comparison_Exp>
  first_msg_bet_reward?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  max_transmitters?: InputMaybe<Numeric_Comparison_Exp>
  min_delegate_amount?: InputMaybe<Numeric_Comparison_Exp>
  min_personal_amount?: InputMaybe<Numeric_Comparison_Exp>
  msg_bet_amount?: InputMaybe<Numeric_Comparison_Exp>
  msg_bet_reward?: InputMaybe<Numeric_Comparison_Exp>
  operations?: InputMaybe<Operations_Bool_Exp>
  operations_aggregate?: InputMaybe<Operations_Aggregate_Bool_Exp>
  operations_count?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
  owner?: InputMaybe<String_Comparison_Exp>
  protocol_addresses?: InputMaybe<Protocol_Address_Bool_Exp>
  protocol_addresses_aggregate?: InputMaybe<Protocol_Address_Aggregate_Bool_Exp>
  protocol_executors?: InputMaybe<Protocol_Executor_Bool_Exp>
  protocol_executors_aggregate?: InputMaybe<Protocol_Executor_Aggregate_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  protocol_id_decoded?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
  protocol_proposers?: InputMaybe<Protocol_Proposer_Bool_Exp>
  protocol_proposers_aggregate?: InputMaybe<Protocol_Proposer_Aggregate_Bool_Exp>
  protocol_transmitters?: InputMaybe<Protocol_Transmitter_Bool_Exp>
  protocol_transmitters_aggregate?: InputMaybe<Protocol_Transmitter_Aggregate_Bool_Exp>
  user_entangle_bridge_operations?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
  user_entangle_bridge_operations_aggregate?: InputMaybe<User_Entangle_Bridge_Operations_Aggregate_Bool_Exp>
}

/** columns and relationships of "protocol_executor" */
export type Protocol_Executor = {
  __typename?: 'protocol_executor'
  chain_id: Scalars['numeric']['output']
  created_at: Scalars['timestamp']['output']
  executor_address: Scalars['String']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_id: Scalars['String']['output']
  removed: Scalars['Boolean']['output']
}

/** aggregated selection of "protocol_executor" */
export type Protocol_Executor_Aggregate = {
  __typename?: 'protocol_executor_aggregate'
  aggregate?: Maybe<Protocol_Executor_Aggregate_Fields>
  nodes: Array<Protocol_Executor>
}

export type Protocol_Executor_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Protocol_Executor_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Protocol_Executor_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Protocol_Executor_Aggregate_Bool_Exp_Count>
}

export type Protocol_Executor_Aggregate_Bool_Exp_Bool_And = {
  arguments: Protocol_Executor_Select_Column_Protocol_Executor_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Executor_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Executor_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Protocol_Executor_Select_Column_Protocol_Executor_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Executor_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Executor_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Executor_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "protocol_executor" */
export type Protocol_Executor_Aggregate_Fields = {
  __typename?: 'protocol_executor_aggregate_fields'
  avg?: Maybe<Protocol_Executor_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Executor_Max_Fields>
  min?: Maybe<Protocol_Executor_Min_Fields>
  stddev?: Maybe<Protocol_Executor_Stddev_Fields>
  stddev_pop?: Maybe<Protocol_Executor_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Protocol_Executor_Stddev_Samp_Fields>
  sum?: Maybe<Protocol_Executor_Sum_Fields>
  var_pop?: Maybe<Protocol_Executor_Var_Pop_Fields>
  var_samp?: Maybe<Protocol_Executor_Var_Samp_Fields>
  variance?: Maybe<Protocol_Executor_Variance_Fields>
}

/** aggregate fields of "protocol_executor" */
export type Protocol_Executor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "protocol_executor" */
export type Protocol_Executor_Aggregate_Order_By = {
  avg?: InputMaybe<Protocol_Executor_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Protocol_Executor_Max_Order_By>
  min?: InputMaybe<Protocol_Executor_Min_Order_By>
  stddev?: InputMaybe<Protocol_Executor_Stddev_Order_By>
  stddev_pop?: InputMaybe<Protocol_Executor_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Protocol_Executor_Stddev_Samp_Order_By>
  sum?: InputMaybe<Protocol_Executor_Sum_Order_By>
  var_pop?: InputMaybe<Protocol_Executor_Var_Pop_Order_By>
  var_samp?: InputMaybe<Protocol_Executor_Var_Samp_Order_By>
  variance?: InputMaybe<Protocol_Executor_Variance_Order_By>
}

/** aggregate avg on columns */
export type Protocol_Executor_Avg_Fields = {
  __typename?: 'protocol_executor_avg_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "protocol_executor" */
export type Protocol_Executor_Avg_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "protocol_executor". All fields are combined with a logical 'AND'. */
export type Protocol_Executor_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Executor_Bool_Exp>>
  _not?: InputMaybe<Protocol_Executor_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Executor_Bool_Exp>>
  chain_id?: InputMaybe<Numeric_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  executor_address?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  removed?: InputMaybe<Boolean_Comparison_Exp>
}

/** aggregate max on columns */
export type Protocol_Executor_Max_Fields = {
  __typename?: 'protocol_executor_max_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  executor_address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "protocol_executor" */
export type Protocol_Executor_Max_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  executor_address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Protocol_Executor_Min_Fields = {
  __typename?: 'protocol_executor_min_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  executor_address?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "protocol_executor" */
export type Protocol_Executor_Min_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  executor_address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "protocol_executor". */
export type Protocol_Executor_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  executor_address?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_id?: InputMaybe<Order_By>
  removed?: InputMaybe<Order_By>
}

/** select columns of table "protocol_executor" */
export enum Protocol_Executor_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExecutorAddress = 'executor_address',
  /** column name */
  Id = 'id',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Removed = 'removed',
}

/** select "protocol_executor_aggregate_bool_exp_bool_and_arguments_columns" columns of table "protocol_executor" */
export enum Protocol_Executor_Select_Column_Protocol_Executor_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** select "protocol_executor_aggregate_bool_exp_bool_or_arguments_columns" columns of table "protocol_executor" */
export enum Protocol_Executor_Select_Column_Protocol_Executor_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** aggregate stddev on columns */
export type Protocol_Executor_Stddev_Fields = {
  __typename?: 'protocol_executor_stddev_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "protocol_executor" */
export type Protocol_Executor_Stddev_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Protocol_Executor_Stddev_Pop_Fields = {
  __typename?: 'protocol_executor_stddev_pop_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "protocol_executor" */
export type Protocol_Executor_Stddev_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Protocol_Executor_Stddev_Samp_Fields = {
  __typename?: 'protocol_executor_stddev_samp_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "protocol_executor" */
export type Protocol_Executor_Stddev_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "protocol_executor" */
export type Protocol_Executor_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Executor_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Executor_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['numeric']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  executor_address?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  removed?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate sum on columns */
export type Protocol_Executor_Sum_Fields = {
  __typename?: 'protocol_executor_sum_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "protocol_executor" */
export type Protocol_Executor_Sum_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Protocol_Executor_Var_Pop_Fields = {
  __typename?: 'protocol_executor_var_pop_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "protocol_executor" */
export type Protocol_Executor_Var_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Protocol_Executor_Var_Samp_Fields = {
  __typename?: 'protocol_executor_var_samp_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "protocol_executor" */
export type Protocol_Executor_Var_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Protocol_Executor_Variance_Fields = {
  __typename?: 'protocol_executor_variance_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "protocol_executor" */
export type Protocol_Executor_Variance_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** columns and relationships of "protocol_id_decoded" */
export type Protocol_Id_Decoded = {
  __typename?: 'protocol_id_decoded'
  decoded?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "protocol_id_decoded" */
export type Protocol_Id_Decoded_Aggregate = {
  __typename?: 'protocol_id_decoded_aggregate'
  aggregate?: Maybe<Protocol_Id_Decoded_Aggregate_Fields>
  nodes: Array<Protocol_Id_Decoded>
}

/** aggregate fields of "protocol_id_decoded" */
export type Protocol_Id_Decoded_Aggregate_Fields = {
  __typename?: 'protocol_id_decoded_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Id_Decoded_Max_Fields>
  min?: Maybe<Protocol_Id_Decoded_Min_Fields>
}

/** aggregate fields of "protocol_id_decoded" */
export type Protocol_Id_Decoded_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Id_Decoded_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "protocol_id_decoded". All fields are combined with a logical 'AND'. */
export type Protocol_Id_Decoded_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Id_Decoded_Bool_Exp>>
  _not?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Id_Decoded_Bool_Exp>>
  decoded?: InputMaybe<String_Comparison_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Protocol_Id_Decoded_Max_Fields = {
  __typename?: 'protocol_id_decoded_max_fields'
  decoded?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Protocol_Id_Decoded_Min_Fields = {
  __typename?: 'protocol_id_decoded_min_fields'
  decoded?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "protocol_id_decoded". */
export type Protocol_Id_Decoded_Order_By = {
  decoded?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** select columns of table "protocol_id_decoded" */
export enum Protocol_Id_Decoded_Select_Column {
  /** column name */
  Decoded = 'decoded',
  /** column name */
  ProtocolId = 'protocol_id',
}

/** Streaming cursor of the table "protocol_id_decoded" */
export type Protocol_Id_Decoded_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Id_Decoded_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Id_Decoded_Stream_Cursor_Value_Input = {
  decoded?: InputMaybe<Scalars['String']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type Protocol_Max_Fields = {
  __typename?: 'protocol_max_fields'
  balance?: Maybe<Scalars['numeric']['output']>
  consensus_target_rate?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  data_bet_amount?: Maybe<Scalars['numeric']['output']>
  data_bet_reward?: Maybe<Scalars['numeric']['output']>
  first_data_bet_reward?: Maybe<Scalars['numeric']['output']>
  first_msg_bet_reward?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  max_transmitters?: Maybe<Scalars['numeric']['output']>
  min_delegate_amount?: Maybe<Scalars['numeric']['output']>
  min_personal_amount?: Maybe<Scalars['numeric']['output']>
  msg_bet_amount?: Maybe<Scalars['numeric']['output']>
  msg_bet_reward?: Maybe<Scalars['numeric']['output']>
  owner?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Protocol_Min_Fields = {
  __typename?: 'protocol_min_fields'
  balance?: Maybe<Scalars['numeric']['output']>
  consensus_target_rate?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  data_bet_amount?: Maybe<Scalars['numeric']['output']>
  data_bet_reward?: Maybe<Scalars['numeric']['output']>
  first_data_bet_reward?: Maybe<Scalars['numeric']['output']>
  first_msg_bet_reward?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  max_transmitters?: Maybe<Scalars['numeric']['output']>
  min_delegate_amount?: Maybe<Scalars['numeric']['output']>
  min_personal_amount?: Maybe<Scalars['numeric']['output']>
  msg_bet_amount?: Maybe<Scalars['numeric']['output']>
  msg_bet_reward?: Maybe<Scalars['numeric']['output']>
  owner?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "protocol". */
export type Protocol_Order_By = {
  agent_protocol_supports_aggregate?: InputMaybe<Agent_Protocol_Support_Aggregate_Order_By>
  balance?: InputMaybe<Order_By>
  bets_aggregate?: InputMaybe<Bets_Aggregate_Order_By>
  consensus_target_rate?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  data_bet_amount?: InputMaybe<Order_By>
  data_bet_reward?: InputMaybe<Order_By>
  first_data_bet_reward?: InputMaybe<Order_By>
  first_msg_bet_reward?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  max_transmitters?: InputMaybe<Order_By>
  min_delegate_amount?: InputMaybe<Order_By>
  min_personal_amount?: InputMaybe<Order_By>
  msg_bet_amount?: InputMaybe<Order_By>
  msg_bet_reward?: InputMaybe<Order_By>
  operations_aggregate?: InputMaybe<Operations_Aggregate_Order_By>
  operations_count?: InputMaybe<Operations_Count_By_Protocol_Order_By>
  owner?: InputMaybe<Order_By>
  protocol_addresses_aggregate?: InputMaybe<Protocol_Address_Aggregate_Order_By>
  protocol_executors_aggregate?: InputMaybe<Protocol_Executor_Aggregate_Order_By>
  protocol_id?: InputMaybe<Order_By>
  protocol_id_decoded?: InputMaybe<Protocol_Id_Decoded_Order_By>
  protocol_proposers_aggregate?: InputMaybe<Protocol_Proposer_Aggregate_Order_By>
  protocol_transmitters_aggregate?: InputMaybe<Protocol_Transmitter_Aggregate_Order_By>
  user_entangle_bridge_operations_aggregate?: InputMaybe<User_Entangle_Bridge_Operations_Aggregate_Order_By>
}

/** columns and relationships of "protocol_proposer" */
export type Protocol_Proposer = {
  __typename?: 'protocol_proposer'
  chain_id: Scalars['numeric']['output']
  created_at: Scalars['timestamp']['output']
  id: Scalars['Int']['output']
  proposer_address: Scalars['String']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_id: Scalars['String']['output']
  removed: Scalars['Boolean']['output']
}

/** aggregated selection of "protocol_proposer" */
export type Protocol_Proposer_Aggregate = {
  __typename?: 'protocol_proposer_aggregate'
  aggregate?: Maybe<Protocol_Proposer_Aggregate_Fields>
  nodes: Array<Protocol_Proposer>
}

export type Protocol_Proposer_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Protocol_Proposer_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Protocol_Proposer_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Protocol_Proposer_Aggregate_Bool_Exp_Count>
}

export type Protocol_Proposer_Aggregate_Bool_Exp_Bool_And = {
  arguments: Protocol_Proposer_Select_Column_Protocol_Proposer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Proposer_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Proposer_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Protocol_Proposer_Select_Column_Protocol_Proposer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Proposer_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Proposer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Proposer_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "protocol_proposer" */
export type Protocol_Proposer_Aggregate_Fields = {
  __typename?: 'protocol_proposer_aggregate_fields'
  avg?: Maybe<Protocol_Proposer_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Proposer_Max_Fields>
  min?: Maybe<Protocol_Proposer_Min_Fields>
  stddev?: Maybe<Protocol_Proposer_Stddev_Fields>
  stddev_pop?: Maybe<Protocol_Proposer_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Protocol_Proposer_Stddev_Samp_Fields>
  sum?: Maybe<Protocol_Proposer_Sum_Fields>
  var_pop?: Maybe<Protocol_Proposer_Var_Pop_Fields>
  var_samp?: Maybe<Protocol_Proposer_Var_Samp_Fields>
  variance?: Maybe<Protocol_Proposer_Variance_Fields>
}

/** aggregate fields of "protocol_proposer" */
export type Protocol_Proposer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "protocol_proposer" */
export type Protocol_Proposer_Aggregate_Order_By = {
  avg?: InputMaybe<Protocol_Proposer_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Protocol_Proposer_Max_Order_By>
  min?: InputMaybe<Protocol_Proposer_Min_Order_By>
  stddev?: InputMaybe<Protocol_Proposer_Stddev_Order_By>
  stddev_pop?: InputMaybe<Protocol_Proposer_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Protocol_Proposer_Stddev_Samp_Order_By>
  sum?: InputMaybe<Protocol_Proposer_Sum_Order_By>
  var_pop?: InputMaybe<Protocol_Proposer_Var_Pop_Order_By>
  var_samp?: InputMaybe<Protocol_Proposer_Var_Samp_Order_By>
  variance?: InputMaybe<Protocol_Proposer_Variance_Order_By>
}

/** aggregate avg on columns */
export type Protocol_Proposer_Avg_Fields = {
  __typename?: 'protocol_proposer_avg_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Avg_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "protocol_proposer". All fields are combined with a logical 'AND'. */
export type Protocol_Proposer_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Proposer_Bool_Exp>>
  _not?: InputMaybe<Protocol_Proposer_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Proposer_Bool_Exp>>
  chain_id?: InputMaybe<Numeric_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  proposer_address?: InputMaybe<String_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  removed?: InputMaybe<Boolean_Comparison_Exp>
}

/** aggregate max on columns */
export type Protocol_Proposer_Max_Fields = {
  __typename?: 'protocol_proposer_max_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  proposer_address?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Max_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Protocol_Proposer_Min_Fields = {
  __typename?: 'protocol_proposer_min_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  proposer_address?: Maybe<Scalars['String']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Min_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "protocol_proposer". */
export type Protocol_Proposer_Order_By = {
  chain_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  proposer_address?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_id?: InputMaybe<Order_By>
  removed?: InputMaybe<Order_By>
}

/** select columns of table "protocol_proposer" */
export enum Protocol_Proposer_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Removed = 'removed',
}

/** select "protocol_proposer_aggregate_bool_exp_bool_and_arguments_columns" columns of table "protocol_proposer" */
export enum Protocol_Proposer_Select_Column_Protocol_Proposer_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** select "protocol_proposer_aggregate_bool_exp_bool_or_arguments_columns" columns of table "protocol_proposer" */
export enum Protocol_Proposer_Select_Column_Protocol_Proposer_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** aggregate stddev on columns */
export type Protocol_Proposer_Stddev_Fields = {
  __typename?: 'protocol_proposer_stddev_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Stddev_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Protocol_Proposer_Stddev_Pop_Fields = {
  __typename?: 'protocol_proposer_stddev_pop_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Stddev_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Protocol_Proposer_Stddev_Samp_Fields = {
  __typename?: 'protocol_proposer_stddev_samp_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Stddev_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "protocol_proposer" */
export type Protocol_Proposer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Proposer_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Proposer_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['numeric']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  proposer_address?: InputMaybe<Scalars['String']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  removed?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate sum on columns */
export type Protocol_Proposer_Sum_Fields = {
  __typename?: 'protocol_proposer_sum_fields'
  chain_id?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Sum_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Protocol_Proposer_Var_Pop_Fields = {
  __typename?: 'protocol_proposer_var_pop_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Var_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Protocol_Proposer_Var_Samp_Fields = {
  __typename?: 'protocol_proposer_var_samp_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Var_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Protocol_Proposer_Variance_Fields = {
  __typename?: 'protocol_proposer_variance_fields'
  chain_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "protocol_proposer" */
export type Protocol_Proposer_Variance_Order_By = {
  chain_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
}

/** select columns of table "protocol" */
export enum Protocol_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  ConsensusTargetRate = 'consensus_target_rate',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataBetAmount = 'data_bet_amount',
  /** column name */
  DataBetReward = 'data_bet_reward',
  /** column name */
  FirstDataBetReward = 'first_data_bet_reward',
  /** column name */
  FirstMsgBetReward = 'first_msg_bet_reward',
  /** column name */
  Id = 'id',
  /** column name */
  MaxTransmitters = 'max_transmitters',
  /** column name */
  MinDelegateAmount = 'min_delegate_amount',
  /** column name */
  MinPersonalAmount = 'min_personal_amount',
  /** column name */
  MsgBetAmount = 'msg_bet_amount',
  /** column name */
  MsgBetReward = 'msg_bet_reward',
  /** column name */
  Owner = 'owner',
  /** column name */
  ProtocolId = 'protocol_id',
}

/** aggregate stddev on columns */
export type Protocol_Stddev_Fields = {
  __typename?: 'protocol_stddev_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Protocol_Stddev_Pop_Fields = {
  __typename?: 'protocol_stddev_pop_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Protocol_Stddev_Samp_Fields = {
  __typename?: 'protocol_stddev_samp_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "protocol" */
export type Protocol_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Stream_Cursor_Value_Input = {
  balance?: InputMaybe<Scalars['numeric']['input']>
  consensus_target_rate?: InputMaybe<Scalars['numeric']['input']>
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  data_bet_amount?: InputMaybe<Scalars['numeric']['input']>
  data_bet_reward?: InputMaybe<Scalars['numeric']['input']>
  first_data_bet_reward?: InputMaybe<Scalars['numeric']['input']>
  first_msg_bet_reward?: InputMaybe<Scalars['numeric']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  max_transmitters?: InputMaybe<Scalars['numeric']['input']>
  min_delegate_amount?: InputMaybe<Scalars['numeric']['input']>
  min_personal_amount?: InputMaybe<Scalars['numeric']['input']>
  msg_bet_amount?: InputMaybe<Scalars['numeric']['input']>
  msg_bet_reward?: InputMaybe<Scalars['numeric']['input']>
  owner?: InputMaybe<Scalars['String']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Protocol_Sum_Fields = {
  __typename?: 'protocol_sum_fields'
  balance?: Maybe<Scalars['numeric']['output']>
  consensus_target_rate?: Maybe<Scalars['numeric']['output']>
  data_bet_amount?: Maybe<Scalars['numeric']['output']>
  data_bet_reward?: Maybe<Scalars['numeric']['output']>
  first_data_bet_reward?: Maybe<Scalars['numeric']['output']>
  first_msg_bet_reward?: Maybe<Scalars['numeric']['output']>
  id?: Maybe<Scalars['Int']['output']>
  max_transmitters?: Maybe<Scalars['numeric']['output']>
  min_delegate_amount?: Maybe<Scalars['numeric']['output']>
  min_personal_amount?: Maybe<Scalars['numeric']['output']>
  msg_bet_amount?: Maybe<Scalars['numeric']['output']>
  msg_bet_reward?: Maybe<Scalars['numeric']['output']>
}

/** columns and relationships of "protocol_transmitter" */
export type Protocol_Transmitter = {
  __typename?: 'protocol_transmitter'
  created_at: Scalars['timestamp']['output']
  id: Scalars['Int']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_id: Scalars['String']['output']
  removed: Scalars['Boolean']['output']
  /** An object relationship */
  success_messages_count?: Maybe<Protocol_Transmitter_Success_Message_Count>
  transmitter: Scalars['String']['output']
}

/** aggregated selection of "protocol_transmitter" */
export type Protocol_Transmitter_Aggregate = {
  __typename?: 'protocol_transmitter_aggregate'
  aggregate?: Maybe<Protocol_Transmitter_Aggregate_Fields>
  nodes: Array<Protocol_Transmitter>
}

export type Protocol_Transmitter_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Protocol_Transmitter_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Protocol_Transmitter_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Protocol_Transmitter_Aggregate_Bool_Exp_Count>
}

export type Protocol_Transmitter_Aggregate_Bool_Exp_Bool_And = {
  arguments: Protocol_Transmitter_Select_Column_Protocol_Transmitter_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Transmitter_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Transmitter_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Protocol_Transmitter_Select_Column_Protocol_Transmitter_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Transmitter_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Protocol_Transmitter_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Protocol_Transmitter_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "protocol_transmitter" */
export type Protocol_Transmitter_Aggregate_Fields = {
  __typename?: 'protocol_transmitter_aggregate_fields'
  avg?: Maybe<Protocol_Transmitter_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Transmitter_Max_Fields>
  min?: Maybe<Protocol_Transmitter_Min_Fields>
  stddev?: Maybe<Protocol_Transmitter_Stddev_Fields>
  stddev_pop?: Maybe<Protocol_Transmitter_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Protocol_Transmitter_Stddev_Samp_Fields>
  sum?: Maybe<Protocol_Transmitter_Sum_Fields>
  var_pop?: Maybe<Protocol_Transmitter_Var_Pop_Fields>
  var_samp?: Maybe<Protocol_Transmitter_Var_Samp_Fields>
  variance?: Maybe<Protocol_Transmitter_Variance_Fields>
}

/** aggregate fields of "protocol_transmitter" */
export type Protocol_Transmitter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "protocol_transmitter" */
export type Protocol_Transmitter_Aggregate_Order_By = {
  avg?: InputMaybe<Protocol_Transmitter_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Protocol_Transmitter_Max_Order_By>
  min?: InputMaybe<Protocol_Transmitter_Min_Order_By>
  stddev?: InputMaybe<Protocol_Transmitter_Stddev_Order_By>
  stddev_pop?: InputMaybe<Protocol_Transmitter_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Protocol_Transmitter_Stddev_Samp_Order_By>
  sum?: InputMaybe<Protocol_Transmitter_Sum_Order_By>
  var_pop?: InputMaybe<Protocol_Transmitter_Var_Pop_Order_By>
  var_samp?: InputMaybe<Protocol_Transmitter_Var_Samp_Order_By>
  variance?: InputMaybe<Protocol_Transmitter_Variance_Order_By>
}

/** aggregate avg on columns */
export type Protocol_Transmitter_Avg_Fields = {
  __typename?: 'protocol_transmitter_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Avg_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "protocol_transmitter". All fields are combined with a logical 'AND'. */
export type Protocol_Transmitter_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Transmitter_Bool_Exp>>
  _not?: InputMaybe<Protocol_Transmitter_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Transmitter_Bool_Exp>>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  removed?: InputMaybe<Boolean_Comparison_Exp>
  success_messages_count?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
  transmitter?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Protocol_Transmitter_Max_Fields = {
  __typename?: 'protocol_transmitter_max_fields'
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Max_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Protocol_Transmitter_Min_Fields = {
  __typename?: 'protocol_transmitter_min_fields'
  created_at?: Maybe<Scalars['timestamp']['output']>
  id?: Maybe<Scalars['Int']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Min_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "protocol_transmitter". */
export type Protocol_Transmitter_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_id?: InputMaybe<Order_By>
  removed?: InputMaybe<Order_By>
  success_messages_count?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** select columns of table "protocol_transmitter" */
export enum Protocol_Transmitter_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Removed = 'removed',
  /** column name */
  Transmitter = 'transmitter',
}

/** select "protocol_transmitter_aggregate_bool_exp_bool_and_arguments_columns" columns of table "protocol_transmitter" */
export enum Protocol_Transmitter_Select_Column_Protocol_Transmitter_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** select "protocol_transmitter_aggregate_bool_exp_bool_or_arguments_columns" columns of table "protocol_transmitter" */
export enum Protocol_Transmitter_Select_Column_Protocol_Transmitter_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Removed = 'removed',
}

/** aggregate stddev on columns */
export type Protocol_Transmitter_Stddev_Fields = {
  __typename?: 'protocol_transmitter_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Stddev_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Protocol_Transmitter_Stddev_Pop_Fields = {
  __typename?: 'protocol_transmitter_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Protocol_Transmitter_Stddev_Samp_Fields = {
  __typename?: 'protocol_transmitter_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "protocol_transmitter" */
export type Protocol_Transmitter_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Transmitter_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Transmitter_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  removed?: InputMaybe<Scalars['Boolean']['input']>
  transmitter?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "protocol_transmitter_success_message_count" */
export type Protocol_Transmitter_Success_Message_Count = {
  __typename?: 'protocol_transmitter_success_message_count'
  msg_count?: Maybe<Scalars['bigint']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** aggregated selection of "protocol_transmitter_success_message_count" */
export type Protocol_Transmitter_Success_Message_Count_Aggregate = {
  __typename?: 'protocol_transmitter_success_message_count_aggregate'
  aggregate?: Maybe<Protocol_Transmitter_Success_Message_Count_Aggregate_Fields>
  nodes: Array<Protocol_Transmitter_Success_Message_Count>
}

/** aggregate fields of "protocol_transmitter_success_message_count" */
export type Protocol_Transmitter_Success_Message_Count_Aggregate_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_aggregate_fields'
  avg?: Maybe<Protocol_Transmitter_Success_Message_Count_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Protocol_Transmitter_Success_Message_Count_Max_Fields>
  min?: Maybe<Protocol_Transmitter_Success_Message_Count_Min_Fields>
  stddev?: Maybe<Protocol_Transmitter_Success_Message_Count_Stddev_Fields>
  stddev_pop?: Maybe<Protocol_Transmitter_Success_Message_Count_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Protocol_Transmitter_Success_Message_Count_Stddev_Samp_Fields>
  sum?: Maybe<Protocol_Transmitter_Success_Message_Count_Sum_Fields>
  var_pop?: Maybe<Protocol_Transmitter_Success_Message_Count_Var_Pop_Fields>
  var_samp?: Maybe<Protocol_Transmitter_Success_Message_Count_Var_Samp_Fields>
  variance?: Maybe<Protocol_Transmitter_Success_Message_Count_Variance_Fields>
}

/** aggregate fields of "protocol_transmitter_success_message_count" */
export type Protocol_Transmitter_Success_Message_Count_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Protocol_Transmitter_Success_Message_Count_Avg_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_avg_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "protocol_transmitter_success_message_count". All fields are combined with a logical 'AND'. */
export type Protocol_Transmitter_Success_Message_Count_Bool_Exp = {
  _and?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Bool_Exp>>
  _not?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
  _or?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Bool_Exp>>
  msg_count?: InputMaybe<Bigint_Comparison_Exp>
  transmitter?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Protocol_Transmitter_Success_Message_Count_Max_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_max_fields'
  msg_count?: Maybe<Scalars['bigint']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Protocol_Transmitter_Success_Message_Count_Min_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_min_fields'
  msg_count?: Maybe<Scalars['bigint']['output']>
  transmitter?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "protocol_transmitter_success_message_count". */
export type Protocol_Transmitter_Success_Message_Count_Order_By = {
  msg_count?: InputMaybe<Order_By>
  transmitter?: InputMaybe<Order_By>
}

/** select columns of table "protocol_transmitter_success_message_count" */
export enum Protocol_Transmitter_Success_Message_Count_Select_Column {
  /** column name */
  MsgCount = 'msg_count',
  /** column name */
  Transmitter = 'transmitter',
}

/** aggregate stddev on columns */
export type Protocol_Transmitter_Success_Message_Count_Stddev_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_stddev_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Protocol_Transmitter_Success_Message_Count_Stddev_Pop_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_stddev_pop_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Protocol_Transmitter_Success_Message_Count_Stddev_Samp_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_stddev_samp_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "protocol_transmitter_success_message_count" */
export type Protocol_Transmitter_Success_Message_Count_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Protocol_Transmitter_Success_Message_Count_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Protocol_Transmitter_Success_Message_Count_Stream_Cursor_Value_Input = {
  msg_count?: InputMaybe<Scalars['bigint']['input']>
  transmitter?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Protocol_Transmitter_Success_Message_Count_Sum_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_sum_fields'
  msg_count?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Protocol_Transmitter_Success_Message_Count_Var_Pop_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_var_pop_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Protocol_Transmitter_Success_Message_Count_Var_Samp_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_var_samp_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Protocol_Transmitter_Success_Message_Count_Variance_Fields = {
  __typename?: 'protocol_transmitter_success_message_count_variance_fields'
  msg_count?: Maybe<Scalars['Float']['output']>
}

/** aggregate sum on columns */
export type Protocol_Transmitter_Sum_Fields = {
  __typename?: 'protocol_transmitter_sum_fields'
  id?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Sum_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Protocol_Transmitter_Var_Pop_Fields = {
  __typename?: 'protocol_transmitter_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Protocol_Transmitter_Var_Samp_Fields = {
  __typename?: 'protocol_transmitter_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Protocol_Transmitter_Variance_Fields = {
  __typename?: 'protocol_transmitter_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "protocol_transmitter" */
export type Protocol_Transmitter_Variance_Order_By = {
  id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Protocol_Var_Pop_Fields = {
  __typename?: 'protocol_var_pop_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Protocol_Var_Samp_Fields = {
  __typename?: 'protocol_var_samp_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Protocol_Variance_Fields = {
  __typename?: 'protocol_variance_fields'
  balance?: Maybe<Scalars['Float']['output']>
  consensus_target_rate?: Maybe<Scalars['Float']['output']>
  data_bet_amount?: Maybe<Scalars['Float']['output']>
  data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_data_bet_reward?: Maybe<Scalars['Float']['output']>
  first_msg_bet_reward?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  max_transmitters?: Maybe<Scalars['Float']['output']>
  min_delegate_amount?: Maybe<Scalars['Float']['output']>
  min_personal_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_amount?: Maybe<Scalars['Float']['output']>
  msg_bet_reward?: Maybe<Scalars['Float']['output']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>
  /** fetch data from the table: "agent" */
  agent: Array<Agent>
  /** fetch aggregated fields from the table: "agent" */
  agent_aggregate: Agent_Aggregate
  /** fetch data from the table: "agent" using primary key columns */
  agent_by_pk?: Maybe<Agent>
  /** fetch data from the table: "agent_info" */
  agent_info: Array<Agent_Info>
  /** fetch aggregated fields from the table: "agent_info" */
  agent_info_aggregate: Agent_Info_Aggregate
  /** fetch data from the table: "agent_info" using primary key columns */
  agent_info_by_pk?: Maybe<Agent_Info>
  /** fetch data from the table: "agent_info_delegator" */
  agent_info_delegator: Array<Agent_Info_Delegator>
  /** fetch aggregated fields from the table: "agent_info_delegator" */
  agent_info_delegator_aggregate: Agent_Info_Delegator_Aggregate
  /** fetch data from the table: "agent_info_delegator" using primary key columns */
  agent_info_delegator_by_pk?: Maybe<Agent_Info_Delegator>
  /** An array relationship */
  agent_info_statistics: Array<Agent_Info_Statistics>
  /** An aggregate relationship */
  agent_info_statistics_aggregate: Agent_Info_Statistics_Aggregate
  /** fetch data from the table: "agent_info_statistics" using primary key columns */
  agent_info_statistics_by_pk?: Maybe<Agent_Info_Statistics>
  /** fetch data from the table: "agent_name" */
  agent_name: Array<Agent_Name>
  /** fetch aggregated fields from the table: "agent_name" */
  agent_name_aggregate: Agent_Name_Aggregate
  /** fetch data from the table: "agent_name" using primary key columns */
  agent_name_by_pk?: Maybe<Agent_Name>
  /** fetch data from the table: "agent_protocol_support" */
  agent_protocol_support: Array<Agent_Protocol_Support>
  /** fetch aggregated fields from the table: "agent_protocol_support" */
  agent_protocol_support_aggregate: Agent_Protocol_Support_Aggregate
  /** fetch data from the table: "agent_protocol_support" using primary key columns */
  agent_protocol_support_by_pk?: Maybe<Agent_Protocol_Support>
  /** fetch data from the table: "assets_info" */
  assets_info: Array<Assets_Info>
  /** fetch aggregated fields from the table: "assets_info" */
  assets_info_aggregate: Assets_Info_Aggregate
  /** fetch data from the table: "assets_info" using primary key columns */
  assets_info_by_pk?: Maybe<Assets_Info>
  /** An array relationship */
  assets_source_originations: Array<Assets_Source_Originations>
  /** An aggregate relationship */
  assets_source_originations_aggregate: Assets_Source_Originations_Aggregate
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>
  /** An array relationship */
  bets: Array<Bets>
  /** An aggregate relationship */
  bets_aggregate: Bets_Aggregate
  /** fetch data from the table: "bets" using primary key columns */
  bets_by_pk?: Maybe<Bets>
  /** fetch data from the table: "block" */
  block: Array<Block>
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>
  bridge?: Maybe<Bridge_Operations_ActionType>
  /** fetch data from the table: "bridge_operations" */
  bridge_operations: Array<Bridge_Operations>
  /** fetch aggregated fields from the table: "bridge_operations" */
  bridge_operations_aggregate: Bridge_Operations_Aggregate
  /** fetch data from the table: "category" */
  category: Array<Category>
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>
  /** fetch data from the table: "cctp_bridge_operations" */
  cctp_bridge_operations: Array<Cctp_Bridge_Operations>
  /** fetch aggregated fields from the table: "cctp_bridge_operations" */
  cctp_bridge_operations_aggregate: Cctp_Bridge_Operations_Aggregate
  /** fetch data from the table: "cctp_bridge_operations" using primary key columns */
  cctp_bridge_operations_by_pk?: Maybe<Cctp_Bridge_Operations>
  /** fetch data from the table: "common_bridge_operations" */
  common_bridge_operations: Array<Common_Bridge_Operations>
  /** fetch aggregated fields from the table: "common_bridge_operations" */
  common_bridge_operations_aggregate: Common_Bridge_Operations_Aggregate
  /** fetch data from the table: "common_bridge_operations" using primary key columns */
  common_bridge_operations_by_pk?: Maybe<Common_Bridge_Operations>
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>
  /** fetch data from the table: "evm_processed_blocks" */
  evm_processed_blocks: Array<Evm_Processed_Blocks>
  /** fetch data from the table: "evmos_inflation_data" */
  evmos_inflation_data: Array<Evmos_Inflation_Data>
  /** fetch aggregated fields from the table: "evmos_inflation_data" */
  evmos_inflation_data_aggregate: Evmos_Inflation_Data_Aggregate
  /** fetch data from the table: "evmos_inflation_data" using primary key columns */
  evmos_inflation_data_by_pk?: Maybe<Evmos_Inflation_Data>
  /** fetch data from the table: "evmos_inflation_params" */
  evmos_inflation_params: Array<Evmos_Inflation_Params>
  /** fetch aggregated fields from the table: "evmos_inflation_params" */
  evmos_inflation_params_aggregate: Evmos_Inflation_Params_Aggregate
  /** fetch data from the table: "evmos_inflation_params" using primary key columns */
  evmos_inflation_params_by_pk?: Maybe<Evmos_Inflation_Params>
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>
  /** fetch data from the table: "frontend_configs" */
  frontend_configs: Array<Frontend_Configs>
  /** fetch aggregated fields from the table: "frontend_configs" */
  frontend_configs_aggregate: Frontend_Configs_Aggregate
  /** fetch data from the table: "frontend_configs" using primary key columns */
  frontend_configs_by_pk?: Maybe<Frontend_Configs>
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>
  /** fetch data from the table: "message" */
  message: Array<Message>
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>
  /** fetch data from the table: "modules" */
  modules: Array<Modules>
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>
  /** fetch data from the table: "operation_count_agent_address" */
  operation_count_agent_address: Array<Operation_Count_Agent_Address>
  /** fetch aggregated fields from the table: "operation_count_agent_address" */
  operation_count_agent_address_aggregate: Operation_Count_Agent_Address_Aggregate
  /** fetch data from the table: "operation_is_inflight" */
  operation_is_inflight: Array<Operation_Is_Inflight>
  /** fetch aggregated fields from the table: "operation_is_inflight" */
  operation_is_inflight_aggregate: Operation_Is_Inflight_Aggregate
  /** fetch data from the table: "operation_proof" */
  operation_proof: Array<Operation_Proof>
  /** fetch aggregated fields from the table: "operation_proof" */
  operation_proof_aggregate: Operation_Proof_Aggregate
  /** fetch data from the table: "operation_proof" using primary key columns */
  operation_proof_by_pk?: Maybe<Operation_Proof>
  /** fetch data from the table: "operation_proof_transmitter_sig" */
  operation_proof_transmitter_sig: Array<Operation_Proof_Transmitter_Sig>
  /** fetch aggregated fields from the table: "operation_proof_transmitter_sig" */
  operation_proof_transmitter_sig_aggregate: Operation_Proof_Transmitter_Sig_Aggregate
  /** fetch data from the table: "operation_proof_transmitter_sig" using primary key columns */
  operation_proof_transmitter_sig_by_pk?: Maybe<Operation_Proof_Transmitter_Sig>
  /** An array relationship */
  operation_proof_transmitters: Array<Operation_Proof_Transmitters>
  /** An aggregate relationship */
  operation_proof_transmitters_aggregate: Operation_Proof_Transmitters_Aggregate
  /** fetch data from the table: "operation_proof_transmitters" using primary key columns */
  operation_proof_transmitters_by_pk?: Maybe<Operation_Proof_Transmitters>
  /** An array relationship */
  operation_proof_watchers: Array<Operation_Proof_Watchers>
  /** An aggregate relationship */
  operation_proof_watchers_aggregate: Operation_Proof_Watchers_Aggregate
  /** fetch data from the table: "operation_proof_watchers" using primary key columns */
  operation_proof_watchers_by_pk?: Maybe<Operation_Proof_Watchers>
  /** fetch data from the table: "operation_total_count_agent_address" */
  operation_total_count_agent_address: Array<Operation_Total_Count_Agent_Address>
  /** fetch aggregated fields from the table: "operation_total_count_agent_address" */
  operation_total_count_agent_address_aggregate: Operation_Total_Count_Agent_Address_Aggregate
  /** An array relationship */
  operations: Array<Operations>
  /** An aggregate relationship */
  operations_aggregate: Operations_Aggregate
  /** fetch data from the table: "operations" using primary key columns */
  operations_by_pk?: Maybe<Operations>
  /** fetch data from the table: "operations_count_by_protocol" */
  operations_count_by_protocol: Array<Operations_Count_By_Protocol>
  /** fetch aggregated fields from the table: "operations_count_by_protocol" */
  operations_count_by_protocol_aggregate: Operations_Count_By_Protocol_Aggregate
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate
  /** fetch data from the table: "price_charts" */
  price_charts: Array<Price_Charts>
  /** fetch aggregated fields from the table: "price_charts" */
  price_charts_aggregate: Price_Charts_Aggregate
  /** An array relationship */
  prices: Array<Prices>
  /** An aggregate relationship */
  prices_aggregate: Prices_Aggregate
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>
  /** fetch data from the table: "protocol" */
  protocol: Array<Protocol>
  /** fetch data from the table: "protocol_address" */
  protocol_address: Array<Protocol_Address>
  /** fetch aggregated fields from the table: "protocol_address" */
  protocol_address_aggregate: Protocol_Address_Aggregate
  /** fetch data from the table: "protocol_address" using primary key columns */
  protocol_address_by_pk?: Maybe<Protocol_Address>
  /** fetch aggregated fields from the table: "protocol" */
  protocol_aggregate: Protocol_Aggregate
  /** fetch data from the table: "protocol" using primary key columns */
  protocol_by_pk?: Maybe<Protocol>
  /** fetch data from the table: "protocol_executor" */
  protocol_executor: Array<Protocol_Executor>
  /** fetch aggregated fields from the table: "protocol_executor" */
  protocol_executor_aggregate: Protocol_Executor_Aggregate
  /** fetch data from the table: "protocol_executor" using primary key columns */
  protocol_executor_by_pk?: Maybe<Protocol_Executor>
  /** fetch data from the table: "protocol_id_decoded" */
  protocol_id_decoded: Array<Protocol_Id_Decoded>
  /** fetch aggregated fields from the table: "protocol_id_decoded" */
  protocol_id_decoded_aggregate: Protocol_Id_Decoded_Aggregate
  /** fetch data from the table: "protocol_proposer" */
  protocol_proposer: Array<Protocol_Proposer>
  /** fetch aggregated fields from the table: "protocol_proposer" */
  protocol_proposer_aggregate: Protocol_Proposer_Aggregate
  /** fetch data from the table: "protocol_proposer" using primary key columns */
  protocol_proposer_by_pk?: Maybe<Protocol_Proposer>
  /** fetch data from the table: "protocol_transmitter" */
  protocol_transmitter: Array<Protocol_Transmitter>
  /** fetch aggregated fields from the table: "protocol_transmitter" */
  protocol_transmitter_aggregate: Protocol_Transmitter_Aggregate
  /** fetch data from the table: "protocol_transmitter" using primary key columns */
  protocol_transmitter_by_pk?: Maybe<Protocol_Transmitter>
  /** fetch data from the table: "protocol_transmitter_success_message_count" */
  protocol_transmitter_success_message_count: Array<Protocol_Transmitter_Success_Message_Count>
  /** fetch aggregated fields from the table: "protocol_transmitter_success_message_count" */
  protocol_transmitter_success_message_count_aggregate: Protocol_Transmitter_Success_Message_Count_Aggregate
  /** fetch data from the table: "real_voting_power" */
  real_voting_power: Array<Real_Voting_Power>
  /** fetch aggregated fields from the table: "real_voting_power" */
  real_voting_power_aggregate: Real_Voting_Power_Aggregate
  /** borpa */
  result: Scalars['String']['output']
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate
  /** fetch data from the table: "source_origination" */
  source_origination: Array<Source_Origination>
  /** fetch aggregated fields from the table: "source_origination" */
  source_origination_aggregate: Source_Origination_Aggregate
  /** fetch data from the table: "source_origination" using primary key columns */
  source_origination_by_pk?: Maybe<Source_Origination>
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>
  /** fetch data from the table: "supply" */
  supply: Array<Supply>
  /** fetch data from the table: "token" */
  token: Array<Token>
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>
  /** fetch data from the table: "total_message_value" */
  total_message_value: Array<Total_Message_Value>
  /** fetch aggregated fields from the table: "total_message_value" */
  total_message_value_aggregate: Total_Message_Value_Aggregate
  /** fetch data from the table: "total_value_secured" */
  total_value_secured: Array<Total_Value_Secured>
  /** fetch aggregated fields from the table: "total_value_secured" */
  total_value_secured_aggregate: Total_Value_Secured_Aggregate
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate
  /** fetch data from the table: "usd_rate" */
  usd_rate: Array<Usd_Rate>
  /** fetch aggregated fields from the table: "usd_rate" */
  usd_rate_aggregate: Usd_Rate_Aggregate
  /** fetch data from the table: "usd_rate" using primary key columns */
  usd_rate_by_pk?: Maybe<Usd_Rate>
  /** fetch data from the table: "user_account" */
  user_account: Array<User_Account>
  /** fetch aggregated fields from the table: "user_account" */
  user_account_aggregate: User_Account_Aggregate
  /** An array relationship */
  user_entangle_bridge_operations: Array<User_Entangle_Bridge_Operations>
  /** An aggregate relationship */
  user_entangle_bridge_operations_aggregate: User_Entangle_Bridge_Operations_Aggregate
  /** fetch data from the table: "validator" */
  validator: Array<Validator>
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>
  /** An array relationship */
  validator_delegations: Array<Validator_Delegations>
  /** An aggregate relationship */
  validator_delegations_aggregate: Validator_Delegations_Aggregate
  /** fetch data from the table: "validator_delegations" using primary key columns */
  validator_delegations_by_pk?: Maybe<Validator_Delegations>
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>
  /** fetch data from the table: "validator_stats" */
  validator_stats: Array<Validator_Stats>
  /** fetch aggregated fields from the table: "validator_stats" */
  validator_stats_aggregate: Validator_Stats_Aggregate
  /** fetch data from the table: "validator_stats" using primary key columns */
  validator_stats_by_pk?: Maybe<Validator_Stats>
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>
}

export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String']['input']
}

export type Query_RootAgentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Order_By>>
  where?: InputMaybe<Agent_Bool_Exp>
}

export type Query_RootAgent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Order_By>>
  where?: InputMaybe<Agent_Bool_Exp>
}

export type Query_RootAgent_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootAgent_InfoArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Order_By>>
  where?: InputMaybe<Agent_Info_Bool_Exp>
}

export type Query_RootAgent_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Order_By>>
  where?: InputMaybe<Agent_Info_Bool_Exp>
}

export type Query_RootAgent_Info_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootAgent_Info_DelegatorArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Delegator_Order_By>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

export type Query_RootAgent_Info_Delegator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Delegator_Order_By>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

export type Query_RootAgent_Info_Delegator_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootAgent_Info_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Statistics_Order_By>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

export type Query_RootAgent_Info_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Statistics_Order_By>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

export type Query_RootAgent_Info_Statistics_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootAgent_NameArgs = {
  distinct_on?: InputMaybe<Array<Agent_Name_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Name_Order_By>>
  where?: InputMaybe<Agent_Name_Bool_Exp>
}

export type Query_RootAgent_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Name_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Name_Order_By>>
  where?: InputMaybe<Agent_Name_Bool_Exp>
}

export type Query_RootAgent_Name_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootAgent_Protocol_SupportArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

export type Query_RootAgent_Protocol_Support_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

export type Query_RootAgent_Protocol_Support_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootAssets_InfoArgs = {
  distinct_on?: InputMaybe<Array<Assets_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Info_Order_By>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

export type Query_RootAssets_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Info_Order_By>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

export type Query_RootAssets_Info_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Query_RootAssets_Source_OriginationsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

export type Query_RootAssets_Source_Originations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Query_RootBetsArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

export type Query_RootBets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

export type Query_RootBets_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint']['input']
}

export type Query_RootBridgeArgs = {
  arg1: SampleInput
}

export type Query_RootBridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bridge_Operations_Order_By>>
  where?: InputMaybe<Bridge_Operations_Bool_Exp>
}

export type Query_RootBridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bridge_Operations_Order_By>>
  where?: InputMaybe<Bridge_Operations_Bool_Exp>
}

export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootCctp_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Cctp_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Cctp_Bridge_Operations_Order_By>>
  where?: InputMaybe<Cctp_Bridge_Operations_Bool_Exp>
}

export type Query_RootCctp_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cctp_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Cctp_Bridge_Operations_Order_By>>
  where?: InputMaybe<Cctp_Bridge_Operations_Bool_Exp>
}

export type Query_RootCctp_Bridge_Operations_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Query_RootCommon_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Common_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Common_Bridge_Operations_Order_By>>
  where?: InputMaybe<Common_Bridge_Operations_Bool_Exp>
}

export type Query_RootCommon_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Common_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Common_Bridge_Operations_Order_By>>
  where?: InputMaybe<Common_Bridge_Operations_Bool_Exp>
}

export type Query_RootCommon_Bridge_Operations_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Query_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Query_RootEvm_Processed_BlocksArgs = {
  distinct_on?: InputMaybe<Array<Evm_Processed_Blocks_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evm_Processed_Blocks_Order_By>>
  where?: InputMaybe<Evm_Processed_Blocks_Bool_Exp>
}

export type Query_RootEvmos_Inflation_DataArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Data_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Data_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Data_Bool_Exp>
}

export type Query_RootEvmos_Inflation_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Data_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Data_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Data_Bool_Exp>
}

export type Query_RootEvmos_Inflation_Data_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input']
}

export type Query_RootEvmos_Inflation_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Params_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Params_Bool_Exp>
}

export type Query_RootEvmos_Inflation_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Params_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Params_Bool_Exp>
}

export type Query_RootEvmos_Inflation_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input']
}

export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Query_RootFrontend_ConfigsArgs = {
  distinct_on?: InputMaybe<Array<Frontend_Configs_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Frontend_Configs_Order_By>>
  where?: InputMaybe<Frontend_Configs_Bool_Exp>
}

export type Query_RootFrontend_Configs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Frontend_Configs_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Frontend_Configs_Order_By>>
  where?: InputMaybe<Frontend_Configs_Bool_Exp>
}

export type Query_RootFrontend_Configs_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Genesis_Order_By>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Query_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Inflation_Order_By>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Query_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Modules_Order_By>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String']['input']
}

export type Query_RootOperation_Count_Agent_AddressArgs = {
  distinct_on?: InputMaybe<Array<Operation_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
}

export type Query_RootOperation_Count_Agent_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
}

export type Query_RootOperation_Is_InflightArgs = {
  distinct_on?: InputMaybe<Array<Operation_Is_Inflight_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Is_Inflight_Order_By>>
  where?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
}

export type Query_RootOperation_Is_Inflight_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Is_Inflight_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Is_Inflight_Order_By>>
  where?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
}

export type Query_RootOperation_ProofArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Order_By>>
  where?: InputMaybe<Operation_Proof_Bool_Exp>
}

export type Query_RootOperation_Proof_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Order_By>>
  where?: InputMaybe<Operation_Proof_Bool_Exp>
}

export type Query_RootOperation_Proof_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootOperation_Proof_Transmitter_SigArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

export type Query_RootOperation_Proof_Transmitter_Sig_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

export type Query_RootOperation_Proof_Transmitter_Sig_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootOperation_Proof_TransmittersArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitters_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

export type Query_RootOperation_Proof_Transmitters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitters_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

export type Query_RootOperation_Proof_Transmitters_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootOperation_Proof_WatchersArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Watchers_Order_By>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

export type Query_RootOperation_Proof_Watchers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Watchers_Order_By>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

export type Query_RootOperation_Proof_Watchers_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootOperation_Total_Count_Agent_AddressArgs = {
  distinct_on?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
}

export type Query_RootOperation_Total_Count_Agent_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
}

export type Query_RootOperationsArgs = {
  distinct_on?: InputMaybe<Array<Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Order_By>>
  where?: InputMaybe<Operations_Bool_Exp>
}

export type Query_RootOperations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Order_By>>
  where?: InputMaybe<Operations_Bool_Exp>
}

export type Query_RootOperations_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootOperations_Count_By_ProtocolArgs = {
  distinct_on?: InputMaybe<Array<Operations_Count_By_Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Count_By_Protocol_Order_By>>
  where?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
}

export type Query_RootOperations_Count_By_Protocol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operations_Count_By_Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Count_By_Protocol_Order_By>>
  where?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
}

export type Query_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Query_RootPrice_ChartsArgs = {
  distinct_on?: InputMaybe<Array<Price_Charts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Price_Charts_Order_By>>
  where?: InputMaybe<Price_Charts_Bool_Exp>
}

export type Query_RootPrice_Charts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Charts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Price_Charts_Order_By>>
  where?: InputMaybe<Price_Charts_Bool_Exp>
}

export type Query_RootPricesArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

export type Query_RootPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int']['input']
}

export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int']['input']
}

export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Query_RootProtocolArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Order_By>>
  where?: InputMaybe<Protocol_Bool_Exp>
}

export type Query_RootProtocol_AddressArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Address_Order_By>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

export type Query_RootProtocol_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Address_Order_By>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

export type Query_RootProtocol_Address_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootProtocol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Order_By>>
  where?: InputMaybe<Protocol_Bool_Exp>
}

export type Query_RootProtocol_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootProtocol_ExecutorArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Executor_Order_By>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

export type Query_RootProtocol_Executor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Executor_Order_By>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

export type Query_RootProtocol_Executor_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootProtocol_Id_DecodedArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Id_Decoded_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Id_Decoded_Order_By>>
  where?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
}

export type Query_RootProtocol_Id_Decoded_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Id_Decoded_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Id_Decoded_Order_By>>
  where?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
}

export type Query_RootProtocol_ProposerArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Proposer_Order_By>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

export type Query_RootProtocol_Proposer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Proposer_Order_By>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

export type Query_RootProtocol_Proposer_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootProtocol_TransmitterArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

export type Query_RootProtocol_Transmitter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

export type Query_RootProtocol_Transmitter_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Query_RootProtocol_Transmitter_Success_Message_CountArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
}

export type Query_RootProtocol_Transmitter_Success_Message_Count_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
}

export type Query_RootReal_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Real_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Real_Voting_Power_Order_By>>
  where?: InputMaybe<Real_Voting_Power_Bool_Exp>
}

export type Query_RootReal_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Real_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Real_Voting_Power_Order_By>>
  where?: InputMaybe<Real_Voting_Power_Bool_Exp>
}

export type Query_RootResultArgs = {
  arg: Scalars['String']['input']
}

export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Query_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>
}

export type Query_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>
}

export type Query_RootSource_OriginationArgs = {
  distinct_on?: InputMaybe<Array<Source_Origination_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Source_Origination_Order_By>>
  where?: InputMaybe<Source_Origination_Bool_Exp>
}

export type Query_RootSource_Origination_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Origination_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Source_Origination_Order_By>>
  where?: InputMaybe<Source_Origination_Bool_Exp>
}

export type Query_RootSource_Origination_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Supply_Order_By>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Order_By>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Query_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Query_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Query_RootTotal_Message_ValueArgs = {
  distinct_on?: InputMaybe<Array<Total_Message_Value_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Message_Value_Order_By>>
  where?: InputMaybe<Total_Message_Value_Bool_Exp>
}

export type Query_RootTotal_Message_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Total_Message_Value_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Message_Value_Order_By>>
  where?: InputMaybe<Total_Message_Value_Bool_Exp>
}

export type Query_RootTotal_Value_SecuredArgs = {
  distinct_on?: InputMaybe<Array<Total_Value_Secured_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Value_Secured_Order_By>>
  where?: InputMaybe<Total_Value_Secured_Bool_Exp>
}

export type Query_RootTotal_Value_Secured_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Total_Value_Secured_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Value_Secured_Order_By>>
  where?: InputMaybe<Total_Value_Secured_Bool_Exp>
}

export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Query_RootUsd_RateArgs = {
  distinct_on?: InputMaybe<Array<Usd_Rate_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Usd_Rate_Order_By>>
  where?: InputMaybe<Usd_Rate_Bool_Exp>
}

export type Query_RootUsd_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Usd_Rate_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Usd_Rate_Order_By>>
  where?: InputMaybe<Usd_Rate_Bool_Exp>
}

export type Query_RootUsd_Rate_By_PkArgs = {
  currency: Scalars['String']['input']
}

export type Query_RootUser_AccountArgs = {
  distinct_on?: InputMaybe<Array<User_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Account_Order_By>>
  where?: InputMaybe<User_Account_Bool_Exp>
}

export type Query_RootUser_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Account_Order_By>>
  where?: InputMaybe<User_Account_Bool_Exp>
}

export type Query_RootUser_Entangle_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

export type Query_RootUser_Entangle_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Order_By>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']['input']
}

export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootValidator_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

export type Query_RootValidator_Delegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

export type Query_RootValidator_Delegations_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String']['input']
}

export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootValidator_StatsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Stats_Order_By>>
  where?: InputMaybe<Validator_Stats_Bool_Exp>
}

export type Query_RootValidator_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Stats_Order_By>>
  where?: InputMaybe<Validator_Stats_Bool_Exp>
}

export type Query_RootValidator_Stats_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Query_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Query_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** columns and relationships of "real_voting_power" */
export type Real_Voting_Power = {
  __typename?: 'real_voting_power'
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['numeric']['output']>
}

/** aggregated selection of "real_voting_power" */
export type Real_Voting_Power_Aggregate = {
  __typename?: 'real_voting_power_aggregate'
  aggregate?: Maybe<Real_Voting_Power_Aggregate_Fields>
  nodes: Array<Real_Voting_Power>
}

/** aggregate fields of "real_voting_power" */
export type Real_Voting_Power_Aggregate_Fields = {
  __typename?: 'real_voting_power_aggregate_fields'
  avg?: Maybe<Real_Voting_Power_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Real_Voting_Power_Max_Fields>
  min?: Maybe<Real_Voting_Power_Min_Fields>
  stddev?: Maybe<Real_Voting_Power_Stddev_Fields>
  stddev_pop?: Maybe<Real_Voting_Power_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Real_Voting_Power_Stddev_Samp_Fields>
  sum?: Maybe<Real_Voting_Power_Sum_Fields>
  var_pop?: Maybe<Real_Voting_Power_Var_Pop_Fields>
  var_samp?: Maybe<Real_Voting_Power_Var_Samp_Fields>
  variance?: Maybe<Real_Voting_Power_Variance_Fields>
}

/** aggregate fields of "real_voting_power" */
export type Real_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Real_Voting_Power_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Real_Voting_Power_Avg_Fields = {
  __typename?: 'real_voting_power_avg_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "real_voting_power". All fields are combined with a logical 'AND'. */
export type Real_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Real_Voting_Power_Bool_Exp>>
  _not?: InputMaybe<Real_Voting_Power_Bool_Exp>
  _or?: InputMaybe<Array<Real_Voting_Power_Bool_Exp>>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<Numeric_Comparison_Exp>
}

/** aggregate max on columns */
export type Real_Voting_Power_Max_Fields = {
  __typename?: 'real_voting_power_max_fields'
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['numeric']['output']>
}

/** aggregate min on columns */
export type Real_Voting_Power_Min_Fields = {
  __typename?: 'real_voting_power_min_fields'
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['numeric']['output']>
}

/** Ordering options when selecting data from "real_voting_power". */
export type Real_Voting_Power_Order_By = {
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "real_voting_power" */
export enum Real_Voting_Power_Select_Column {
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power',
}

/** aggregate stddev on columns */
export type Real_Voting_Power_Stddev_Fields = {
  __typename?: 'real_voting_power_stddev_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Real_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'real_voting_power_stddev_pop_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Real_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'real_voting_power_stddev_samp_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "real_voting_power" */
export type Real_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Real_Voting_Power_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Real_Voting_Power_Stream_Cursor_Value_Input = {
  validator_address?: InputMaybe<Scalars['String']['input']>
  voting_power?: InputMaybe<Scalars['numeric']['input']>
}

/** aggregate sum on columns */
export type Real_Voting_Power_Sum_Fields = {
  __typename?: 'real_voting_power_sum_fields'
  voting_power?: Maybe<Scalars['numeric']['output']>
}

/** aggregate var_pop on columns */
export type Real_Voting_Power_Var_Pop_Fields = {
  __typename?: 'real_voting_power_var_pop_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Real_Voting_Power_Var_Samp_Fields = {
  __typename?: 'real_voting_power_var_samp_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Real_Voting_Power_Variance_Fields = {
  __typename?: 'real_voting_power_variance_fields'
  voting_power?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params'
  height: Scalars['bigint']['output']
  params: Scalars['jsonb']['output']
}

/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Slashing_Params_Bool_Exp>>
  _not?: InputMaybe<Slashing_Params_Bool_Exp>
  _or?: InputMaybe<Array<Slashing_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params',
}

/** Streaming cursor of the table "slashing_params" */
export type Slashing_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slashing_Params_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Slashing_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  params?: InputMaybe<Scalars['jsonb']['input']>
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>
  _gt?: InputMaybe<Scalars['smallint']['input']>
  _gte?: InputMaybe<Scalars['smallint']['input']>
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['smallint']['input']>
  _lte?: InputMaybe<Scalars['smallint']['input']>
  _neq?: InputMaybe<Scalars['smallint']['input']>
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>
}

/** columns and relationships of "software_upgrade_plan" */
export type Software_Upgrade_Plan = {
  __typename?: 'software_upgrade_plan'
  height: Scalars['bigint']['output']
  info: Scalars['String']['output']
  plan_name: Scalars['String']['output']
  /** An object relationship */
  proposal?: Maybe<Proposal>
  proposal_id?: Maybe<Scalars['Int']['output']>
  upgrade_height: Scalars['bigint']['output']
}

/** aggregated selection of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate = {
  __typename?: 'software_upgrade_plan_aggregate'
  aggregate?: Maybe<Software_Upgrade_Plan_Aggregate_Fields>
  nodes: Array<Software_Upgrade_Plan>
}

/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_Fields = {
  __typename?: 'software_upgrade_plan_aggregate_fields'
  avg?: Maybe<Software_Upgrade_Plan_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Software_Upgrade_Plan_Max_Fields>
  min?: Maybe<Software_Upgrade_Plan_Min_Fields>
  stddev?: Maybe<Software_Upgrade_Plan_Stddev_Fields>
  stddev_pop?: Maybe<Software_Upgrade_Plan_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Software_Upgrade_Plan_Stddev_Samp_Fields>
  sum?: Maybe<Software_Upgrade_Plan_Sum_Fields>
  var_pop?: Maybe<Software_Upgrade_Plan_Var_Pop_Fields>
  var_samp?: Maybe<Software_Upgrade_Plan_Var_Samp_Fields>
  variance?: Maybe<Software_Upgrade_Plan_Variance_Fields>
}

/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Software_Upgrade_Plan_Avg_Fields = {
  __typename?: 'software_upgrade_plan_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "software_upgrade_plan". All fields are combined with a logical 'AND'. */
export type Software_Upgrade_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>
  _not?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>
  _or?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  info?: InputMaybe<String_Comparison_Exp>
  plan_name?: InputMaybe<String_Comparison_Exp>
  proposal?: InputMaybe<Proposal_Bool_Exp>
  proposal_id?: InputMaybe<Int_Comparison_Exp>
  upgrade_height?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Software_Upgrade_Plan_Max_Fields = {
  __typename?: 'software_upgrade_plan_max_fields'
  height?: Maybe<Scalars['bigint']['output']>
  info?: Maybe<Scalars['String']['output']>
  plan_name?: Maybe<Scalars['String']['output']>
  proposal_id?: Maybe<Scalars['Int']['output']>
  upgrade_height?: Maybe<Scalars['bigint']['output']>
}

/** aggregate min on columns */
export type Software_Upgrade_Plan_Min_Fields = {
  __typename?: 'software_upgrade_plan_min_fields'
  height?: Maybe<Scalars['bigint']['output']>
  info?: Maybe<Scalars['String']['output']>
  plan_name?: Maybe<Scalars['String']['output']>
  proposal_id?: Maybe<Scalars['Int']['output']>
  upgrade_height?: Maybe<Scalars['bigint']['output']>
}

/** Ordering options when selecting data from "software_upgrade_plan". */
export type Software_Upgrade_Plan_Order_By = {
  height?: InputMaybe<Order_By>
  info?: InputMaybe<Order_By>
  plan_name?: InputMaybe<Order_By>
  proposal?: InputMaybe<Proposal_Order_By>
  proposal_id?: InputMaybe<Order_By>
  upgrade_height?: InputMaybe<Order_By>
}

/** select columns of table "software_upgrade_plan" */
export enum Software_Upgrade_Plan_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Info = 'info',
  /** column name */
  PlanName = 'plan_name',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  UpgradeHeight = 'upgrade_height',
}

/** aggregate stddev on columns */
export type Software_Upgrade_Plan_Stddev_Fields = {
  __typename?: 'software_upgrade_plan_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Software_Upgrade_Plan_Stddev_Pop_Fields = {
  __typename?: 'software_upgrade_plan_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Software_Upgrade_Plan_Stddev_Samp_Fields = {
  __typename?: 'software_upgrade_plan_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Software_Upgrade_Plan_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Software_Upgrade_Plan_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  info?: InputMaybe<Scalars['String']['input']>
  plan_name?: InputMaybe<Scalars['String']['input']>
  proposal_id?: InputMaybe<Scalars['Int']['input']>
  upgrade_height?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Software_Upgrade_Plan_Sum_Fields = {
  __typename?: 'software_upgrade_plan_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
  proposal_id?: Maybe<Scalars['Int']['output']>
  upgrade_height?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Software_Upgrade_Plan_Var_Pop_Fields = {
  __typename?: 'software_upgrade_plan_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Software_Upgrade_Plan_Var_Samp_Fields = {
  __typename?: 'software_upgrade_plan_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Software_Upgrade_Plan_Variance_Fields = {
  __typename?: 'software_upgrade_plan_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
  proposal_id?: Maybe<Scalars['Float']['output']>
  upgrade_height?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "source_origination" */
export type Source_Origination = {
  __typename?: 'source_origination'
  /** An array relationship */
  assets_source_originations: Array<Assets_Source_Originations>
  /** An aggregate relationship */
  assets_source_originations_aggregate: Assets_Source_Originations_Aggregate
  icon_url?: Maybe<Scalars['String']['output']>
  id: Scalars['bigint']['output']
  name: Scalars['String']['output']
  /** An array relationship */
  prices: Array<Prices>
  /** An aggregate relationship */
  prices_aggregate: Prices_Aggregate
  source_link?: Maybe<Scalars['String']['output']>
  ui_name?: Maybe<Scalars['String']['output']>
}

/** columns and relationships of "source_origination" */
export type Source_OriginationAssets_Source_OriginationsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

/** columns and relationships of "source_origination" */
export type Source_OriginationAssets_Source_Originations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

/** columns and relationships of "source_origination" */
export type Source_OriginationPricesArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

/** columns and relationships of "source_origination" */
export type Source_OriginationPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

/** aggregated selection of "source_origination" */
export type Source_Origination_Aggregate = {
  __typename?: 'source_origination_aggregate'
  aggregate?: Maybe<Source_Origination_Aggregate_Fields>
  nodes: Array<Source_Origination>
}

/** aggregate fields of "source_origination" */
export type Source_Origination_Aggregate_Fields = {
  __typename?: 'source_origination_aggregate_fields'
  avg?: Maybe<Source_Origination_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Source_Origination_Max_Fields>
  min?: Maybe<Source_Origination_Min_Fields>
  stddev?: Maybe<Source_Origination_Stddev_Fields>
  stddev_pop?: Maybe<Source_Origination_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Source_Origination_Stddev_Samp_Fields>
  sum?: Maybe<Source_Origination_Sum_Fields>
  var_pop?: Maybe<Source_Origination_Var_Pop_Fields>
  var_samp?: Maybe<Source_Origination_Var_Samp_Fields>
  variance?: Maybe<Source_Origination_Variance_Fields>
}

/** aggregate fields of "source_origination" */
export type Source_Origination_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Source_Origination_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Source_Origination_Avg_Fields = {
  __typename?: 'source_origination_avg_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "source_origination". All fields are combined with a logical 'AND'. */
export type Source_Origination_Bool_Exp = {
  _and?: InputMaybe<Array<Source_Origination_Bool_Exp>>
  _not?: InputMaybe<Source_Origination_Bool_Exp>
  _or?: InputMaybe<Array<Source_Origination_Bool_Exp>>
  assets_source_originations?: InputMaybe<Assets_Source_Originations_Bool_Exp>
  assets_source_originations_aggregate?: InputMaybe<Assets_Source_Originations_Aggregate_Bool_Exp>
  icon_url?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Bigint_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  prices?: InputMaybe<Prices_Bool_Exp>
  prices_aggregate?: InputMaybe<Prices_Aggregate_Bool_Exp>
  source_link?: InputMaybe<String_Comparison_Exp>
  ui_name?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Source_Origination_Max_Fields = {
  __typename?: 'source_origination_max_fields'
  icon_url?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  name?: Maybe<Scalars['String']['output']>
  source_link?: Maybe<Scalars['String']['output']>
  ui_name?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Source_Origination_Min_Fields = {
  __typename?: 'source_origination_min_fields'
  icon_url?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['bigint']['output']>
  name?: Maybe<Scalars['String']['output']>
  source_link?: Maybe<Scalars['String']['output']>
  ui_name?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "source_origination". */
export type Source_Origination_Order_By = {
  assets_source_originations_aggregate?: InputMaybe<Assets_Source_Originations_Aggregate_Order_By>
  icon_url?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  prices_aggregate?: InputMaybe<Prices_Aggregate_Order_By>
  source_link?: InputMaybe<Order_By>
  ui_name?: InputMaybe<Order_By>
}

/** select columns of table "source_origination" */
export enum Source_Origination_Select_Column {
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SourceLink = 'source_link',
  /** column name */
  UiName = 'ui_name',
}

/** aggregate stddev on columns */
export type Source_Origination_Stddev_Fields = {
  __typename?: 'source_origination_stddev_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Source_Origination_Stddev_Pop_Fields = {
  __typename?: 'source_origination_stddev_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Source_Origination_Stddev_Samp_Fields = {
  __typename?: 'source_origination_stddev_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "source_origination" */
export type Source_Origination_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Source_Origination_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Source_Origination_Stream_Cursor_Value_Input = {
  icon_url?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['bigint']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  source_link?: InputMaybe<Scalars['String']['input']>
  ui_name?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Source_Origination_Sum_Fields = {
  __typename?: 'source_origination_sum_fields'
  id?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Source_Origination_Var_Pop_Fields = {
  __typename?: 'source_origination_var_pop_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Source_Origination_Var_Samp_Fields = {
  __typename?: 'source_origination_var_samp_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Source_Origination_Variance_Fields = {
  __typename?: 'source_origination_variance_fields'
  id?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params'
  height: Scalars['bigint']['output']
  params: Scalars['jsonb']['output']
}

/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>
  _not?: InputMaybe<Staking_Params_Bool_Exp>
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  params?: InputMaybe<Jsonb_Comparison_Exp>
}

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>
  params?: InputMaybe<Order_By>
}

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params',
}

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  params?: InputMaybe<Scalars['jsonb']['input']>
}

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool'
  bonded_tokens: Scalars['String']['output']
  height: Scalars['bigint']['output']
  not_bonded_tokens: Scalars['String']['output']
  staked_not_bonded_tokens: Scalars['String']['output']
  unbonding_tokens: Scalars['String']['output']
}

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>
  _not?: InputMaybe<Staking_Pool_Bool_Exp>
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>
  bonded_tokens?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>
  staked_not_bonded_tokens?: InputMaybe<String_Comparison_Exp>
  unbonding_tokens?: InputMaybe<String_Comparison_Exp>
}

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  not_bonded_tokens?: InputMaybe<Order_By>
  staked_not_bonded_tokens?: InputMaybe<Order_By>
  unbonding_tokens?: InputMaybe<Order_By>
}

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  StakedNotBondedTokens = 'staked_not_bonded_tokens',
  /** column name */
  UnbondingTokens = 'unbonding_tokens',
}

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>
  staked_not_bonded_tokens?: InputMaybe<Scalars['String']['input']>
  unbonding_tokens?: InputMaybe<Scalars['String']['input']>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "account" */
  account: Array<Account>
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>
  /** fetch data from the table: "agent" */
  agent: Array<Agent>
  /** fetch aggregated fields from the table: "agent" */
  agent_aggregate: Agent_Aggregate
  /** fetch data from the table: "agent" using primary key columns */
  agent_by_pk?: Maybe<Agent>
  /** fetch data from the table: "agent_info" */
  agent_info: Array<Agent_Info>
  /** fetch aggregated fields from the table: "agent_info" */
  agent_info_aggregate: Agent_Info_Aggregate
  /** fetch data from the table: "agent_info" using primary key columns */
  agent_info_by_pk?: Maybe<Agent_Info>
  /** fetch data from the table: "agent_info_delegator" */
  agent_info_delegator: Array<Agent_Info_Delegator>
  /** fetch aggregated fields from the table: "agent_info_delegator" */
  agent_info_delegator_aggregate: Agent_Info_Delegator_Aggregate
  /** fetch data from the table: "agent_info_delegator" using primary key columns */
  agent_info_delegator_by_pk?: Maybe<Agent_Info_Delegator>
  /** fetch data from the table in a streaming manner: "agent_info_delegator" */
  agent_info_delegator_stream: Array<Agent_Info_Delegator>
  /** An array relationship */
  agent_info_statistics: Array<Agent_Info_Statistics>
  /** An aggregate relationship */
  agent_info_statistics_aggregate: Agent_Info_Statistics_Aggregate
  /** fetch data from the table: "agent_info_statistics" using primary key columns */
  agent_info_statistics_by_pk?: Maybe<Agent_Info_Statistics>
  /** fetch data from the table in a streaming manner: "agent_info_statistics" */
  agent_info_statistics_stream: Array<Agent_Info_Statistics>
  /** fetch data from the table in a streaming manner: "agent_info" */
  agent_info_stream: Array<Agent_Info>
  /** fetch data from the table: "agent_name" */
  agent_name: Array<Agent_Name>
  /** fetch aggregated fields from the table: "agent_name" */
  agent_name_aggregate: Agent_Name_Aggregate
  /** fetch data from the table: "agent_name" using primary key columns */
  agent_name_by_pk?: Maybe<Agent_Name>
  /** fetch data from the table in a streaming manner: "agent_name" */
  agent_name_stream: Array<Agent_Name>
  /** fetch data from the table: "agent_protocol_support" */
  agent_protocol_support: Array<Agent_Protocol_Support>
  /** fetch aggregated fields from the table: "agent_protocol_support" */
  agent_protocol_support_aggregate: Agent_Protocol_Support_Aggregate
  /** fetch data from the table: "agent_protocol_support" using primary key columns */
  agent_protocol_support_by_pk?: Maybe<Agent_Protocol_Support>
  /** fetch data from the table in a streaming manner: "agent_protocol_support" */
  agent_protocol_support_stream: Array<Agent_Protocol_Support>
  /** fetch data from the table in a streaming manner: "agent" */
  agent_stream: Array<Agent>
  /** fetch data from the table: "assets_info" */
  assets_info: Array<Assets_Info>
  /** fetch aggregated fields from the table: "assets_info" */
  assets_info_aggregate: Assets_Info_Aggregate
  /** fetch data from the table: "assets_info" using primary key columns */
  assets_info_by_pk?: Maybe<Assets_Info>
  /** fetch data from the table in a streaming manner: "assets_info" */
  assets_info_stream: Array<Assets_Info>
  /** An array relationship */
  assets_source_originations: Array<Assets_Source_Originations>
  /** An aggregate relationship */
  assets_source_originations_aggregate: Assets_Source_Originations_Aggregate
  /** fetch data from the table in a streaming manner: "assets_source_originations" */
  assets_source_originations_stream: Array<Assets_Source_Originations>
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>
  /** fetch data from the table in a streaming manner: "average_block_time_from_genesis" */
  average_block_time_from_genesis_stream: Array<Average_Block_Time_From_Genesis>
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>
  /** An array relationship */
  bets: Array<Bets>
  /** An aggregate relationship */
  bets_aggregate: Bets_Aggregate
  /** fetch data from the table: "bets" using primary key columns */
  bets_by_pk?: Maybe<Bets>
  /** fetch data from the table in a streaming manner: "bets" */
  bets_stream: Array<Bets>
  /** fetch data from the table: "block" */
  block: Array<Block>
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>
  /** fetch data from the table in a streaming manner: "block" */
  block_stream: Array<Block>
  /** fetch data from the table: "bridge_operations" */
  bridge_operations: Array<Bridge_Operations>
  /** fetch aggregated fields from the table: "bridge_operations" */
  bridge_operations_aggregate: Bridge_Operations_Aggregate
  /** fetch data from the table in a streaming manner: "bridge_operations" */
  bridge_operations_stream: Array<Bridge_Operations>
  /** fetch data from the table: "category" */
  category: Array<Category>
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>
  /** fetch data from the table: "cctp_bridge_operations" */
  cctp_bridge_operations: Array<Cctp_Bridge_Operations>
  /** fetch aggregated fields from the table: "cctp_bridge_operations" */
  cctp_bridge_operations_aggregate: Cctp_Bridge_Operations_Aggregate
  /** fetch data from the table: "cctp_bridge_operations" using primary key columns */
  cctp_bridge_operations_by_pk?: Maybe<Cctp_Bridge_Operations>
  /** fetch data from the table in a streaming manner: "cctp_bridge_operations" */
  cctp_bridge_operations_stream: Array<Cctp_Bridge_Operations>
  /** fetch data from the table: "common_bridge_operations" */
  common_bridge_operations: Array<Common_Bridge_Operations>
  /** fetch aggregated fields from the table: "common_bridge_operations" */
  common_bridge_operations_aggregate: Common_Bridge_Operations_Aggregate
  /** fetch data from the table: "common_bridge_operations" using primary key columns */
  common_bridge_operations_by_pk?: Maybe<Common_Bridge_Operations>
  /** fetch data from the table in a streaming manner: "common_bridge_operations" */
  common_bridge_operations_stream: Array<Common_Bridge_Operations>
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>
  /** fetch data from the table in a streaming manner: "community_pool" */
  community_pool_stream: Array<Community_Pool>
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>
  /** fetch data from the table in a streaming manner: "distribution_params" */
  distribution_params_stream: Array<Distribution_Params>
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>
  /** fetch data from the table in a streaming manner: "double_sign_evidence" */
  double_sign_evidence_stream: Array<Double_Sign_Evidence>
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>
  /** fetch data from the table in a streaming manner: "double_sign_vote" */
  double_sign_vote_stream: Array<Double_Sign_Vote>
  /** fetch data from the table: "evm_processed_blocks" */
  evm_processed_blocks: Array<Evm_Processed_Blocks>
  /** fetch data from the table in a streaming manner: "evm_processed_blocks" */
  evm_processed_blocks_stream: Array<Evm_Processed_Blocks>
  /** fetch data from the table: "evmos_inflation_data" */
  evmos_inflation_data: Array<Evmos_Inflation_Data>
  /** fetch aggregated fields from the table: "evmos_inflation_data" */
  evmos_inflation_data_aggregate: Evmos_Inflation_Data_Aggregate
  /** fetch data from the table: "evmos_inflation_data" using primary key columns */
  evmos_inflation_data_by_pk?: Maybe<Evmos_Inflation_Data>
  /** fetch data from the table in a streaming manner: "evmos_inflation_data" */
  evmos_inflation_data_stream: Array<Evmos_Inflation_Data>
  /** fetch data from the table: "evmos_inflation_params" */
  evmos_inflation_params: Array<Evmos_Inflation_Params>
  /** fetch aggregated fields from the table: "evmos_inflation_params" */
  evmos_inflation_params_aggregate: Evmos_Inflation_Params_Aggregate
  /** fetch data from the table: "evmos_inflation_params" using primary key columns */
  evmos_inflation_params_by_pk?: Maybe<Evmos_Inflation_Params>
  /** fetch data from the table in a streaming manner: "evmos_inflation_params" */
  evmos_inflation_params_stream: Array<Evmos_Inflation_Params>
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>
  /** fetch data from the table in a streaming manner: "fee_grant_allowance" */
  fee_grant_allowance_stream: Array<Fee_Grant_Allowance>
  /** fetch data from the table: "frontend_configs" */
  frontend_configs: Array<Frontend_Configs>
  /** fetch aggregated fields from the table: "frontend_configs" */
  frontend_configs_aggregate: Frontend_Configs_Aggregate
  /** fetch data from the table: "frontend_configs" using primary key columns */
  frontend_configs_by_pk?: Maybe<Frontend_Configs>
  /** fetch data from the table in a streaming manner: "frontend_configs" */
  frontend_configs_stream: Array<Frontend_Configs>
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>
  /** fetch data from the table in a streaming manner: "genesis" */
  genesis_stream: Array<Genesis>
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>
  /** fetch data from the table in a streaming manner: "inflation" */
  inflation_stream: Array<Inflation>
  /** fetch data from the table: "message" */
  message: Array<Message>
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>
  /** fetch data from the table in a streaming manner: "mint_params" */
  mint_params_stream: Array<Mint_Params>
  /** fetch data from the table: "modules" */
  modules: Array<Modules>
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>
  /** fetch data from the table in a streaming manner: "modules" */
  modules_stream: Array<Modules>
  /** fetch data from the table: "operation_count_agent_address" */
  operation_count_agent_address: Array<Operation_Count_Agent_Address>
  /** fetch aggregated fields from the table: "operation_count_agent_address" */
  operation_count_agent_address_aggregate: Operation_Count_Agent_Address_Aggregate
  /** fetch data from the table in a streaming manner: "operation_count_agent_address" */
  operation_count_agent_address_stream: Array<Operation_Count_Agent_Address>
  /** fetch data from the table: "operation_is_inflight" */
  operation_is_inflight: Array<Operation_Is_Inflight>
  /** fetch aggregated fields from the table: "operation_is_inflight" */
  operation_is_inflight_aggregate: Operation_Is_Inflight_Aggregate
  /** fetch data from the table in a streaming manner: "operation_is_inflight" */
  operation_is_inflight_stream: Array<Operation_Is_Inflight>
  /** fetch data from the table: "operation_proof" */
  operation_proof: Array<Operation_Proof>
  /** fetch aggregated fields from the table: "operation_proof" */
  operation_proof_aggregate: Operation_Proof_Aggregate
  /** fetch data from the table: "operation_proof" using primary key columns */
  operation_proof_by_pk?: Maybe<Operation_Proof>
  /** fetch data from the table in a streaming manner: "operation_proof" */
  operation_proof_stream: Array<Operation_Proof>
  /** fetch data from the table: "operation_proof_transmitter_sig" */
  operation_proof_transmitter_sig: Array<Operation_Proof_Transmitter_Sig>
  /** fetch aggregated fields from the table: "operation_proof_transmitter_sig" */
  operation_proof_transmitter_sig_aggregate: Operation_Proof_Transmitter_Sig_Aggregate
  /** fetch data from the table: "operation_proof_transmitter_sig" using primary key columns */
  operation_proof_transmitter_sig_by_pk?: Maybe<Operation_Proof_Transmitter_Sig>
  /** fetch data from the table in a streaming manner: "operation_proof_transmitter_sig" */
  operation_proof_transmitter_sig_stream: Array<Operation_Proof_Transmitter_Sig>
  /** An array relationship */
  operation_proof_transmitters: Array<Operation_Proof_Transmitters>
  /** An aggregate relationship */
  operation_proof_transmitters_aggregate: Operation_Proof_Transmitters_Aggregate
  /** fetch data from the table: "operation_proof_transmitters" using primary key columns */
  operation_proof_transmitters_by_pk?: Maybe<Operation_Proof_Transmitters>
  /** fetch data from the table in a streaming manner: "operation_proof_transmitters" */
  operation_proof_transmitters_stream: Array<Operation_Proof_Transmitters>
  /** An array relationship */
  operation_proof_watchers: Array<Operation_Proof_Watchers>
  /** An aggregate relationship */
  operation_proof_watchers_aggregate: Operation_Proof_Watchers_Aggregate
  /** fetch data from the table: "operation_proof_watchers" using primary key columns */
  operation_proof_watchers_by_pk?: Maybe<Operation_Proof_Watchers>
  /** fetch data from the table in a streaming manner: "operation_proof_watchers" */
  operation_proof_watchers_stream: Array<Operation_Proof_Watchers>
  /** fetch data from the table: "operation_total_count_agent_address" */
  operation_total_count_agent_address: Array<Operation_Total_Count_Agent_Address>
  /** fetch aggregated fields from the table: "operation_total_count_agent_address" */
  operation_total_count_agent_address_aggregate: Operation_Total_Count_Agent_Address_Aggregate
  /** fetch data from the table in a streaming manner: "operation_total_count_agent_address" */
  operation_total_count_agent_address_stream: Array<Operation_Total_Count_Agent_Address>
  /** An array relationship */
  operations: Array<Operations>
  /** An aggregate relationship */
  operations_aggregate: Operations_Aggregate
  /** fetch data from the table: "operations" using primary key columns */
  operations_by_pk?: Maybe<Operations>
  /** fetch data from the table: "operations_count_by_protocol" */
  operations_count_by_protocol: Array<Operations_Count_By_Protocol>
  /** fetch aggregated fields from the table: "operations_count_by_protocol" */
  operations_count_by_protocol_aggregate: Operations_Count_By_Protocol_Aggregate
  /** fetch data from the table in a streaming manner: "operations_count_by_protocol" */
  operations_count_by_protocol_stream: Array<Operations_Count_By_Protocol>
  /** fetch data from the table in a streaming manner: "operations" */
  operations_stream: Array<Operations>
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate
  /** fetch data from the table in a streaming manner: "pre_commit" */
  pre_commit_stream: Array<Pre_Commit>
  /** fetch data from the table: "price_charts" */
  price_charts: Array<Price_Charts>
  /** fetch aggregated fields from the table: "price_charts" */
  price_charts_aggregate: Price_Charts_Aggregate
  /** fetch data from the table in a streaming manner: "price_charts" */
  price_charts_stream: Array<Price_Charts>
  /** An array relationship */
  prices: Array<Prices>
  /** An aggregate relationship */
  prices_aggregate: Prices_Aggregate
  /** fetch data from the table in a streaming manner: "prices" */
  prices_stream: Array<Prices>
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  proposal_deposit_stream: Array<Proposal_Deposit>
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_stream: Array<Proposal_Staking_Pool_Snapshot>
  /** fetch data from the table in a streaming manner: "proposal" */
  proposal_stream: Array<Proposal>
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  proposal_tally_result_stream: Array<Proposal_Tally_Result>
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_stream: Array<Proposal_Validator_Status_Snapshot>
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  proposal_vote_stream: Array<Proposal_Vote>
  /** fetch data from the table: "protocol" */
  protocol: Array<Protocol>
  /** fetch data from the table: "protocol_address" */
  protocol_address: Array<Protocol_Address>
  /** fetch aggregated fields from the table: "protocol_address" */
  protocol_address_aggregate: Protocol_Address_Aggregate
  /** fetch data from the table: "protocol_address" using primary key columns */
  protocol_address_by_pk?: Maybe<Protocol_Address>
  /** fetch data from the table in a streaming manner: "protocol_address" */
  protocol_address_stream: Array<Protocol_Address>
  /** fetch aggregated fields from the table: "protocol" */
  protocol_aggregate: Protocol_Aggregate
  /** fetch data from the table: "protocol" using primary key columns */
  protocol_by_pk?: Maybe<Protocol>
  /** fetch data from the table: "protocol_executor" */
  protocol_executor: Array<Protocol_Executor>
  /** fetch aggregated fields from the table: "protocol_executor" */
  protocol_executor_aggregate: Protocol_Executor_Aggregate
  /** fetch data from the table: "protocol_executor" using primary key columns */
  protocol_executor_by_pk?: Maybe<Protocol_Executor>
  /** fetch data from the table in a streaming manner: "protocol_executor" */
  protocol_executor_stream: Array<Protocol_Executor>
  /** fetch data from the table: "protocol_id_decoded" */
  protocol_id_decoded: Array<Protocol_Id_Decoded>
  /** fetch aggregated fields from the table: "protocol_id_decoded" */
  protocol_id_decoded_aggregate: Protocol_Id_Decoded_Aggregate
  /** fetch data from the table in a streaming manner: "protocol_id_decoded" */
  protocol_id_decoded_stream: Array<Protocol_Id_Decoded>
  /** fetch data from the table: "protocol_proposer" */
  protocol_proposer: Array<Protocol_Proposer>
  /** fetch aggregated fields from the table: "protocol_proposer" */
  protocol_proposer_aggregate: Protocol_Proposer_Aggregate
  /** fetch data from the table: "protocol_proposer" using primary key columns */
  protocol_proposer_by_pk?: Maybe<Protocol_Proposer>
  /** fetch data from the table in a streaming manner: "protocol_proposer" */
  protocol_proposer_stream: Array<Protocol_Proposer>
  /** fetch data from the table in a streaming manner: "protocol" */
  protocol_stream: Array<Protocol>
  /** fetch data from the table: "protocol_transmitter" */
  protocol_transmitter: Array<Protocol_Transmitter>
  /** fetch aggregated fields from the table: "protocol_transmitter" */
  protocol_transmitter_aggregate: Protocol_Transmitter_Aggregate
  /** fetch data from the table: "protocol_transmitter" using primary key columns */
  protocol_transmitter_by_pk?: Maybe<Protocol_Transmitter>
  /** fetch data from the table in a streaming manner: "protocol_transmitter" */
  protocol_transmitter_stream: Array<Protocol_Transmitter>
  /** fetch data from the table: "protocol_transmitter_success_message_count" */
  protocol_transmitter_success_message_count: Array<Protocol_Transmitter_Success_Message_Count>
  /** fetch aggregated fields from the table: "protocol_transmitter_success_message_count" */
  protocol_transmitter_success_message_count_aggregate: Protocol_Transmitter_Success_Message_Count_Aggregate
  /** fetch data from the table in a streaming manner: "protocol_transmitter_success_message_count" */
  protocol_transmitter_success_message_count_stream: Array<Protocol_Transmitter_Success_Message_Count>
  /** fetch data from the table: "real_voting_power" */
  real_voting_power: Array<Real_Voting_Power>
  /** fetch aggregated fields from the table: "real_voting_power" */
  real_voting_power_aggregate: Real_Voting_Power_Aggregate
  /** fetch data from the table in a streaming manner: "real_voting_power" */
  real_voting_power_stream: Array<Real_Voting_Power>
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>
  /** fetch data from the table in a streaming manner: "slashing_params" */
  slashing_params_stream: Array<Slashing_Params>
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate
  /** fetch data from the table in a streaming manner: "software_upgrade_plan" */
  software_upgrade_plan_stream: Array<Software_Upgrade_Plan>
  /** fetch data from the table: "source_origination" */
  source_origination: Array<Source_Origination>
  /** fetch aggregated fields from the table: "source_origination" */
  source_origination_aggregate: Source_Origination_Aggregate
  /** fetch data from the table: "source_origination" using primary key columns */
  source_origination_by_pk?: Maybe<Source_Origination>
  /** fetch data from the table in a streaming manner: "source_origination" */
  source_origination_stream: Array<Source_Origination>
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>
  /** fetch data from the table: "supply" */
  supply: Array<Supply>
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>
  /** fetch data from the table: "token" */
  token: Array<Token>
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>
  /** fetch data from the table in a streaming manner: "token_price_history" */
  token_price_history_stream: Array<Token_Price_History>
  /** fetch data from the table in a streaming manner: "token_price" */
  token_price_stream: Array<Token_Price>
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>
  /** fetch data from the table in a streaming manner: "token_unit" */
  token_unit_stream: Array<Token_Unit>
  /** fetch data from the table: "total_message_value" */
  total_message_value: Array<Total_Message_Value>
  /** fetch aggregated fields from the table: "total_message_value" */
  total_message_value_aggregate: Total_Message_Value_Aggregate
  /** fetch data from the table in a streaming manner: "total_message_value" */
  total_message_value_stream: Array<Total_Message_Value>
  /** fetch data from the table: "total_value_secured" */
  total_value_secured: Array<Total_Value_Secured>
  /** fetch aggregated fields from the table: "total_value_secured" */
  total_value_secured_aggregate: Total_Value_Secured_Aggregate
  /** fetch data from the table in a streaming manner: "total_value_secured" */
  total_value_secured_stream: Array<Total_Value_Secured>
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>
  /** fetch data from the table: "usd_rate" */
  usd_rate: Array<Usd_Rate>
  /** fetch aggregated fields from the table: "usd_rate" */
  usd_rate_aggregate: Usd_Rate_Aggregate
  /** fetch data from the table: "usd_rate" using primary key columns */
  usd_rate_by_pk?: Maybe<Usd_Rate>
  /** fetch data from the table in a streaming manner: "usd_rate" */
  usd_rate_stream: Array<Usd_Rate>
  /** fetch data from the table: "user_account" */
  user_account: Array<User_Account>
  /** fetch aggregated fields from the table: "user_account" */
  user_account_aggregate: User_Account_Aggregate
  /** fetch data from the table in a streaming manner: "user_account" */
  user_account_stream: Array<User_Account>
  /** An array relationship */
  user_entangle_bridge_operations: Array<User_Entangle_Bridge_Operations>
  /** An aggregate relationship */
  user_entangle_bridge_operations_aggregate: User_Entangle_Bridge_Operations_Aggregate
  /** fetch data from the table in a streaming manner: "user_entangle_bridge_operations" */
  user_entangle_bridge_operations_stream: Array<User_Entangle_Bridge_Operations>
  /** fetch data from the table: "validator" */
  validator: Array<Validator>
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>
  /** fetch data from the table in a streaming manner: "validator_commission" */
  validator_commission_stream: Array<Validator_Commission>
  /** An array relationship */
  validator_delegations: Array<Validator_Delegations>
  /** An aggregate relationship */
  validator_delegations_aggregate: Validator_Delegations_Aggregate
  /** fetch data from the table: "validator_delegations" using primary key columns */
  validator_delegations_by_pk?: Maybe<Validator_Delegations>
  /** fetch data from the table in a streaming manner: "validator_delegations" */
  validator_delegations_stream: Array<Validator_Delegations>
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>
  /** fetch data from the table in a streaming manner: "validator_description" */
  validator_description_stream: Array<Validator_Description>
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>
  /** fetch data from the table in a streaming manner: "validator_info" */
  validator_info_stream: Array<Validator_Info>
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>
  /** fetch data from the table in a streaming manner: "validator_signing_info" */
  validator_signing_info_stream: Array<Validator_Signing_Info>
  /** fetch data from the table: "validator_stats" */
  validator_stats: Array<Validator_Stats>
  /** fetch aggregated fields from the table: "validator_stats" */
  validator_stats_aggregate: Validator_Stats_Aggregate
  /** fetch data from the table: "validator_stats" using primary key columns */
  validator_stats_by_pk?: Maybe<Validator_Stats>
  /** fetch data from the table in a streaming manner: "validator_stats" */
  validator_stats_stream: Array<Validator_Stats>
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>
  /** fetch data from the table in a streaming manner: "validator" */
  validator_stream: Array<Validator>
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  validator_voting_power_stream: Array<Validator_Voting_Power>
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>
  /** fetch data from the table in a streaming manner: "vesting_account" */
  vesting_account_stream: Array<Vesting_Account>
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>
  /** fetch data from the table in a streaming manner: "vesting_period" */
  vesting_period_stream: Array<Vesting_Period>
}

export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Account_Order_By>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String']['input']
}

export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>
  where?: InputMaybe<Account_Bool_Exp>
}

export type Subscription_RootAgentArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Order_By>>
  where?: InputMaybe<Agent_Bool_Exp>
}

export type Subscription_RootAgent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Order_By>>
  where?: InputMaybe<Agent_Bool_Exp>
}

export type Subscription_RootAgent_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootAgent_InfoArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Order_By>>
  where?: InputMaybe<Agent_Info_Bool_Exp>
}

export type Subscription_RootAgent_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Order_By>>
  where?: InputMaybe<Agent_Info_Bool_Exp>
}

export type Subscription_RootAgent_Info_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootAgent_Info_DelegatorArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Delegator_Order_By>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

export type Subscription_RootAgent_Info_Delegator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Delegator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Delegator_Order_By>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

export type Subscription_RootAgent_Info_Delegator_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootAgent_Info_Delegator_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Agent_Info_Delegator_Stream_Cursor_Input>>
  where?: InputMaybe<Agent_Info_Delegator_Bool_Exp>
}

export type Subscription_RootAgent_Info_StatisticsArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Statistics_Order_By>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

export type Subscription_RootAgent_Info_Statistics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Info_Statistics_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Info_Statistics_Order_By>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

export type Subscription_RootAgent_Info_Statistics_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootAgent_Info_Statistics_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Agent_Info_Statistics_Stream_Cursor_Input>>
  where?: InputMaybe<Agent_Info_Statistics_Bool_Exp>
}

export type Subscription_RootAgent_Info_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Agent_Info_Stream_Cursor_Input>>
  where?: InputMaybe<Agent_Info_Bool_Exp>
}

export type Subscription_RootAgent_NameArgs = {
  distinct_on?: InputMaybe<Array<Agent_Name_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Name_Order_By>>
  where?: InputMaybe<Agent_Name_Bool_Exp>
}

export type Subscription_RootAgent_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Name_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Name_Order_By>>
  where?: InputMaybe<Agent_Name_Bool_Exp>
}

export type Subscription_RootAgent_Name_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootAgent_Name_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Agent_Name_Stream_Cursor_Input>>
  where?: InputMaybe<Agent_Name_Bool_Exp>
}

export type Subscription_RootAgent_Protocol_SupportArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

export type Subscription_RootAgent_Protocol_Support_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Agent_Protocol_Support_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Agent_Protocol_Support_Order_By>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

export type Subscription_RootAgent_Protocol_Support_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootAgent_Protocol_Support_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Agent_Protocol_Support_Stream_Cursor_Input>>
  where?: InputMaybe<Agent_Protocol_Support_Bool_Exp>
}

export type Subscription_RootAgent_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Agent_Stream_Cursor_Input>>
  where?: InputMaybe<Agent_Bool_Exp>
}

export type Subscription_RootAssets_InfoArgs = {
  distinct_on?: InputMaybe<Array<Assets_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Info_Order_By>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

export type Subscription_RootAssets_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Info_Order_By>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

export type Subscription_RootAssets_Info_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Subscription_RootAssets_Info_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Assets_Info_Stream_Cursor_Input>>
  where?: InputMaybe<Assets_Info_Bool_Exp>
}

export type Subscription_RootAssets_Source_OriginationsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

export type Subscription_RootAssets_Source_Originations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Source_Originations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Assets_Source_Originations_Order_By>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

export type Subscription_RootAssets_Source_Originations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Assets_Source_Originations_Stream_Cursor_Input>>
  where?: InputMaybe<Assets_Source_Originations_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_From_Genesis_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Average_Block_Time_From_Genesis_Stream_Cursor_Input>>
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>
}

export type Subscription_RootBetsArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

export type Subscription_RootBets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bets_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bets_Order_By>>
  where?: InputMaybe<Bets_Bool_Exp>
}

export type Subscription_RootBets_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootBets_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Bets_Stream_Cursor_Input>>
  where?: InputMaybe<Bets_Bool_Exp>
}

export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint']['input']
}

export type Subscription_RootBlock_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Block_Stream_Cursor_Input>>
  where?: InputMaybe<Block_Bool_Exp>
}

export type Subscription_RootBridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bridge_Operations_Order_By>>
  where?: InputMaybe<Bridge_Operations_Bool_Exp>
}

export type Subscription_RootBridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Bridge_Operations_Order_By>>
  where?: InputMaybe<Bridge_Operations_Bool_Exp>
}

export type Subscription_RootBridge_Operations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Bridge_Operations_Stream_Cursor_Input>>
  where?: InputMaybe<Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Category_Order_By>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>
  where?: InputMaybe<Category_Bool_Exp>
}

export type Subscription_RootCctp_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Cctp_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Cctp_Bridge_Operations_Order_By>>
  where?: InputMaybe<Cctp_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCctp_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cctp_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Cctp_Bridge_Operations_Order_By>>
  where?: InputMaybe<Cctp_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCctp_Bridge_Operations_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Subscription_RootCctp_Bridge_Operations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Cctp_Bridge_Operations_Stream_Cursor_Input>>
  where?: InputMaybe<Cctp_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCommon_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Common_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Common_Bridge_Operations_Order_By>>
  where?: InputMaybe<Common_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCommon_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Common_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Common_Bridge_Operations_Order_By>>
  where?: InputMaybe<Common_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCommon_Bridge_Operations_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Subscription_RootCommon_Bridge_Operations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Common_Bridge_Operations_Stream_Cursor_Input>>
  where?: InputMaybe<Common_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Subscription_RootCommunity_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Community_Pool_Stream_Cursor_Input>>
  where?: InputMaybe<Community_Pool_Bool_Exp>
}

export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Subscription_RootDistribution_Params_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Distribution_Params_Stream_Cursor_Input>>
  where?: InputMaybe<Distribution_Params_Bool_Exp>
}

export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Subscription_RootDouble_Sign_Evidence_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Double_Sign_Evidence_Stream_Cursor_Input>>
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>
}

export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Subscription_RootDouble_Sign_Vote_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Double_Sign_Vote_Stream_Cursor_Input>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

export type Subscription_RootEvm_Processed_BlocksArgs = {
  distinct_on?: InputMaybe<Array<Evm_Processed_Blocks_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evm_Processed_Blocks_Order_By>>
  where?: InputMaybe<Evm_Processed_Blocks_Bool_Exp>
}

export type Subscription_RootEvm_Processed_Blocks_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Evm_Processed_Blocks_Stream_Cursor_Input>>
  where?: InputMaybe<Evm_Processed_Blocks_Bool_Exp>
}

export type Subscription_RootEvmos_Inflation_DataArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Data_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Data_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Data_Bool_Exp>
}

export type Subscription_RootEvmos_Inflation_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Data_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Data_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Data_Bool_Exp>
}

export type Subscription_RootEvmos_Inflation_Data_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input']
}

export type Subscription_RootEvmos_Inflation_Data_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Evmos_Inflation_Data_Stream_Cursor_Input>>
  where?: InputMaybe<Evmos_Inflation_Data_Bool_Exp>
}

export type Subscription_RootEvmos_Inflation_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Params_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Params_Bool_Exp>
}

export type Subscription_RootEvmos_Inflation_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Evmos_Inflation_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Evmos_Inflation_Params_Order_By>>
  where?: InputMaybe<Evmos_Inflation_Params_Bool_Exp>
}

export type Subscription_RootEvmos_Inflation_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input']
}

export type Subscription_RootEvmos_Inflation_Params_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Evmos_Inflation_Params_Stream_Cursor_Input>>
  where?: InputMaybe<Evmos_Inflation_Params_Bool_Exp>
}

export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Subscription_RootFee_Grant_Allowance_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Fee_Grant_Allowance_Stream_Cursor_Input>>
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>
}

export type Subscription_RootFrontend_ConfigsArgs = {
  distinct_on?: InputMaybe<Array<Frontend_Configs_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Frontend_Configs_Order_By>>
  where?: InputMaybe<Frontend_Configs_Bool_Exp>
}

export type Subscription_RootFrontend_Configs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Frontend_Configs_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Frontend_Configs_Order_By>>
  where?: InputMaybe<Frontend_Configs_Bool_Exp>
}

export type Subscription_RootFrontend_Configs_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootFrontend_Configs_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Frontend_Configs_Stream_Cursor_Input>>
  where?: InputMaybe<Frontend_Configs_Bool_Exp>
}

export type Subscription_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Genesis_Order_By>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Subscription_RootGenesis_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Genesis_Stream_Cursor_Input>>
  where?: InputMaybe<Genesis_Bool_Exp>
}

export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Gov_Params_Stream_Cursor_Input>>
  where?: InputMaybe<Gov_Params_Bool_Exp>
}

export type Subscription_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Inflation_Order_By>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Subscription_RootInflation_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Inflation_Stream_Cursor_Input>>
  where?: InputMaybe<Inflation_Bool_Exp>
}

export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args
  distinct_on?: InputMaybe<Array<Message_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Message_Order_By>>
  where?: InputMaybe<Message_Bool_Exp>
}

export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Subscription_RootMint_Params_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Mint_Params_Stream_Cursor_Input>>
  where?: InputMaybe<Mint_Params_Bool_Exp>
}

export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Modules_Order_By>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String']['input']
}

export type Subscription_RootModules_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Modules_Stream_Cursor_Input>>
  where?: InputMaybe<Modules_Bool_Exp>
}

export type Subscription_RootOperation_Count_Agent_AddressArgs = {
  distinct_on?: InputMaybe<Array<Operation_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
}

export type Subscription_RootOperation_Count_Agent_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
}

export type Subscription_RootOperation_Count_Agent_Address_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Count_Agent_Address_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Count_Agent_Address_Bool_Exp>
}

export type Subscription_RootOperation_Is_InflightArgs = {
  distinct_on?: InputMaybe<Array<Operation_Is_Inflight_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Is_Inflight_Order_By>>
  where?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
}

export type Subscription_RootOperation_Is_Inflight_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Is_Inflight_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Is_Inflight_Order_By>>
  where?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
}

export type Subscription_RootOperation_Is_Inflight_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Is_Inflight_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Is_Inflight_Bool_Exp>
}

export type Subscription_RootOperation_ProofArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Order_By>>
  where?: InputMaybe<Operation_Proof_Bool_Exp>
}

export type Subscription_RootOperation_Proof_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Order_By>>
  where?: InputMaybe<Operation_Proof_Bool_Exp>
}

export type Subscription_RootOperation_Proof_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootOperation_Proof_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Proof_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Proof_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Transmitter_SigArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Transmitter_Sig_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitter_Sig_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Transmitter_Sig_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootOperation_Proof_Transmitter_Sig_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Proof_Transmitter_Sig_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Proof_Transmitter_Sig_Bool_Exp>
}

export type Subscription_RootOperation_Proof_TransmittersArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitters_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Transmitters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Transmitters_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Transmitters_Order_By>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Transmitters_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootOperation_Proof_Transmitters_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Proof_Transmitters_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Proof_Transmitters_Bool_Exp>
}

export type Subscription_RootOperation_Proof_WatchersArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Watchers_Order_By>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Watchers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Proof_Watchers_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Proof_Watchers_Order_By>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

export type Subscription_RootOperation_Proof_Watchers_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootOperation_Proof_Watchers_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Proof_Watchers_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Proof_Watchers_Bool_Exp>
}

export type Subscription_RootOperation_Total_Count_Agent_AddressArgs = {
  distinct_on?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
}

export type Subscription_RootOperation_Total_Count_Agent_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operation_Total_Count_Agent_Address_Order_By>>
  where?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
}

export type Subscription_RootOperation_Total_Count_Agent_Address_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operation_Total_Count_Agent_Address_Stream_Cursor_Input>>
  where?: InputMaybe<Operation_Total_Count_Agent_Address_Bool_Exp>
}

export type Subscription_RootOperationsArgs = {
  distinct_on?: InputMaybe<Array<Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Order_By>>
  where?: InputMaybe<Operations_Bool_Exp>
}

export type Subscription_RootOperations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Order_By>>
  where?: InputMaybe<Operations_Bool_Exp>
}

export type Subscription_RootOperations_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootOperations_Count_By_ProtocolArgs = {
  distinct_on?: InputMaybe<Array<Operations_Count_By_Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Count_By_Protocol_Order_By>>
  where?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
}

export type Subscription_RootOperations_Count_By_Protocol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operations_Count_By_Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Operations_Count_By_Protocol_Order_By>>
  where?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
}

export type Subscription_RootOperations_Count_By_Protocol_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operations_Count_By_Protocol_Stream_Cursor_Input>>
  where?: InputMaybe<Operations_Count_By_Protocol_Bool_Exp>
}

export type Subscription_RootOperations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Operations_Stream_Cursor_Input>>
  where?: InputMaybe<Operations_Bool_Exp>
}

export type Subscription_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Subscription_RootPre_Commit_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Pre_Commit_Stream_Cursor_Input>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

export type Subscription_RootPrice_ChartsArgs = {
  distinct_on?: InputMaybe<Array<Price_Charts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Price_Charts_Order_By>>
  where?: InputMaybe<Price_Charts_Bool_Exp>
}

export type Subscription_RootPrice_Charts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Charts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Price_Charts_Order_By>>
  where?: InputMaybe<Price_Charts_Bool_Exp>
}

export type Subscription_RootPrice_Charts_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Price_Charts_Stream_Cursor_Input>>
  where?: InputMaybe<Price_Charts_Bool_Exp>
}

export type Subscription_RootPricesArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

export type Subscription_RootPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prices_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Prices_Order_By>>
  where?: InputMaybe<Prices_Bool_Exp>
}

export type Subscription_RootPrices_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Prices_Stream_Cursor_Input>>
  where?: InputMaybe<Prices_Bool_Exp>
}

export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Order_By>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Subscription_RootProposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Proposal_Deposit_Stream_Cursor_Input>>
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>
}

export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int']['input']
}

export type Subscription_RootProposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Proposal_Stream_Cursor_Input>>
  where?: InputMaybe<Proposal_Bool_Exp>
}

export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int']['input']
}

export type Subscription_RootProposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Proposal_Tally_Result_Stream_Cursor_Input>>
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>
}

export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Subscription_RootProposal_Vote_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Proposal_Vote_Stream_Cursor_Input>>
  where?: InputMaybe<Proposal_Vote_Bool_Exp>
}

export type Subscription_RootProtocolArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Order_By>>
  where?: InputMaybe<Protocol_Bool_Exp>
}

export type Subscription_RootProtocol_AddressArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Address_Order_By>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

export type Subscription_RootProtocol_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Address_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Address_Order_By>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

export type Subscription_RootProtocol_Address_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootProtocol_Address_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Address_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Address_Bool_Exp>
}

export type Subscription_RootProtocol_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Order_By>>
  where?: InputMaybe<Protocol_Bool_Exp>
}

export type Subscription_RootProtocol_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootProtocol_ExecutorArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Executor_Order_By>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

export type Subscription_RootProtocol_Executor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Executor_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Executor_Order_By>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

export type Subscription_RootProtocol_Executor_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootProtocol_Executor_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Executor_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Executor_Bool_Exp>
}

export type Subscription_RootProtocol_Id_DecodedArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Id_Decoded_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Id_Decoded_Order_By>>
  where?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
}

export type Subscription_RootProtocol_Id_Decoded_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Id_Decoded_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Id_Decoded_Order_By>>
  where?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
}

export type Subscription_RootProtocol_Id_Decoded_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Id_Decoded_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Id_Decoded_Bool_Exp>
}

export type Subscription_RootProtocol_ProposerArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Proposer_Order_By>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

export type Subscription_RootProtocol_Proposer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Proposer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Proposer_Order_By>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

export type Subscription_RootProtocol_Proposer_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootProtocol_Proposer_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Proposer_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Proposer_Bool_Exp>
}

export type Subscription_RootProtocol_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Bool_Exp>
}

export type Subscription_RootProtocol_TransmitterArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

export type Subscription_RootProtocol_Transmitter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

export type Subscription_RootProtocol_Transmitter_By_PkArgs = {
  id: Scalars['Int']['input']
}

export type Subscription_RootProtocol_Transmitter_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Transmitter_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Transmitter_Bool_Exp>
}

export type Subscription_RootProtocol_Transmitter_Success_Message_CountArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
}

export type Subscription_RootProtocol_Transmitter_Success_Message_Count_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Protocol_Transmitter_Success_Message_Count_Order_By>>
  where?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
}

export type Subscription_RootProtocol_Transmitter_Success_Message_Count_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Protocol_Transmitter_Success_Message_Count_Stream_Cursor_Input>>
  where?: InputMaybe<Protocol_Transmitter_Success_Message_Count_Bool_Exp>
}

export type Subscription_RootReal_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Real_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Real_Voting_Power_Order_By>>
  where?: InputMaybe<Real_Voting_Power_Bool_Exp>
}

export type Subscription_RootReal_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Real_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Real_Voting_Power_Order_By>>
  where?: InputMaybe<Real_Voting_Power_Bool_Exp>
}

export type Subscription_RootReal_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Real_Voting_Power_Stream_Cursor_Input>>
  where?: InputMaybe<Real_Voting_Power_Bool_Exp>
}

export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Subscription_RootSlashing_Params_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Slashing_Params_Stream_Cursor_Input>>
  where?: InputMaybe<Slashing_Params_Bool_Exp>
}

export type Subscription_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>
}

export type Subscription_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>
}

export type Subscription_RootSoftware_Upgrade_Plan_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Software_Upgrade_Plan_Stream_Cursor_Input>>
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>
}

export type Subscription_RootSource_OriginationArgs = {
  distinct_on?: InputMaybe<Array<Source_Origination_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Source_Origination_Order_By>>
  where?: InputMaybe<Source_Origination_Bool_Exp>
}

export type Subscription_RootSource_Origination_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Source_Origination_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Source_Origination_Order_By>>
  where?: InputMaybe<Source_Origination_Bool_Exp>
}

export type Subscription_RootSource_Origination_By_PkArgs = {
  id: Scalars['bigint']['input']
}

export type Subscription_RootSource_Origination_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Source_Origination_Stream_Cursor_Input>>
  where?: InputMaybe<Source_Origination_Bool_Exp>
}

export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Staking_Params_Stream_Cursor_Input>>
  where?: InputMaybe<Staking_Params_Bool_Exp>
}

export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Staking_Pool_Stream_Cursor_Input>>
  where?: InputMaybe<Staking_Pool_Bool_Exp>
}

export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Supply_Order_By>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Supply_Stream_Cursor_Input>>
  where?: InputMaybe<Supply_Bool_Exp>
}

export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Order_By>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Subscription_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Subscription_RootToken_Price_History_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Token_Price_History_Stream_Cursor_Input>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

export type Subscription_RootToken_Price_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Token_Price_Stream_Cursor_Input>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>
  where?: InputMaybe<Token_Bool_Exp>
}

export type Subscription_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Subscription_RootToken_Unit_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Token_Unit_Stream_Cursor_Input>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

export type Subscription_RootTotal_Message_ValueArgs = {
  distinct_on?: InputMaybe<Array<Total_Message_Value_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Message_Value_Order_By>>
  where?: InputMaybe<Total_Message_Value_Bool_Exp>
}

export type Subscription_RootTotal_Message_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Total_Message_Value_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Message_Value_Order_By>>
  where?: InputMaybe<Total_Message_Value_Bool_Exp>
}

export type Subscription_RootTotal_Message_Value_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Total_Message_Value_Stream_Cursor_Input>>
  where?: InputMaybe<Total_Message_Value_Bool_Exp>
}

export type Subscription_RootTotal_Value_SecuredArgs = {
  distinct_on?: InputMaybe<Array<Total_Value_Secured_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Value_Secured_Order_By>>
  where?: InputMaybe<Total_Value_Secured_Bool_Exp>
}

export type Subscription_RootTotal_Value_Secured_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Total_Value_Secured_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Total_Value_Secured_Order_By>>
  where?: InputMaybe<Total_Value_Secured_Bool_Exp>
}

export type Subscription_RootTotal_Value_Secured_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Total_Value_Secured_Stream_Cursor_Input>>
  where?: InputMaybe<Total_Value_Secured_Bool_Exp>
}

export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Transaction_Order_By>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>
  where?: InputMaybe<Transaction_Bool_Exp>
}

export type Subscription_RootUsd_RateArgs = {
  distinct_on?: InputMaybe<Array<Usd_Rate_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Usd_Rate_Order_By>>
  where?: InputMaybe<Usd_Rate_Bool_Exp>
}

export type Subscription_RootUsd_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Usd_Rate_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Usd_Rate_Order_By>>
  where?: InputMaybe<Usd_Rate_Bool_Exp>
}

export type Subscription_RootUsd_Rate_By_PkArgs = {
  currency: Scalars['String']['input']
}

export type Subscription_RootUsd_Rate_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Usd_Rate_Stream_Cursor_Input>>
  where?: InputMaybe<Usd_Rate_Bool_Exp>
}

export type Subscription_RootUser_AccountArgs = {
  distinct_on?: InputMaybe<Array<User_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Account_Order_By>>
  where?: InputMaybe<User_Account_Bool_Exp>
}

export type Subscription_RootUser_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Account_Order_By>>
  where?: InputMaybe<User_Account_Bool_Exp>
}

export type Subscription_RootUser_Account_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<User_Account_Stream_Cursor_Input>>
  where?: InputMaybe<User_Account_Bool_Exp>
}

export type Subscription_RootUser_Entangle_Bridge_OperationsArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootUser_Entangle_Bridge_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<User_Entangle_Bridge_Operations_Order_By>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootUser_Entangle_Bridge_Operations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<User_Entangle_Bridge_Operations_Stream_Cursor_Input>>
  where?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
}

export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Order_By>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']['input']
}

export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Commission_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Commission_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

export type Subscription_RootValidator_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

export type Subscription_RootValidator_Delegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

export type Subscription_RootValidator_Delegations_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Delegations_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Delegations_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Description_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Description_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Info_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Info_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Signing_Info_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Signing_Info_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

export type Subscription_RootValidator_StatsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Stats_Order_By>>
  where?: InputMaybe<Validator_Stats_Bool_Exp>
}

export type Subscription_RootValidator_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Stats_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Stats_Order_By>>
  where?: InputMaybe<Validator_Stats_Bool_Exp>
}

export type Subscription_RootValidator_Stats_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Stats_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Stats_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Stats_Bool_Exp>
}

export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Status_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

export type Subscription_RootValidator_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Bool_Exp>
}

export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String']['input']
}

export type Subscription_RootValidator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Validator_Voting_Power_Stream_Cursor_Input>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Subscription_RootVesting_Account_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Vesting_Account_Stream_Cursor_Input>>
  where?: InputMaybe<Vesting_Account_Bool_Exp>
}

export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

export type Subscription_RootVesting_Period_StreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<Vesting_Period_Stream_Cursor_Input>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply'
  coins: Array<Scalars['coin']['output']>
  height: Scalars['bigint']['output']
}

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>
  _not?: InputMaybe<Supply_Bool_Exp>
  _or?: InputMaybe<Array<Supply_Bool_Exp>>
  coins?: InputMaybe<Coin_Array_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
}

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
}

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Array<Scalars['coin']['input']>>
  height?: InputMaybe<Scalars['bigint']['input']>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>
  _gt?: InputMaybe<Scalars['timestamp']['input']>
  _gte?: InputMaybe<Scalars['timestamp']['input']>
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timestamp']['input']>
  _lte?: InputMaybe<Scalars['timestamp']['input']>
  _neq?: InputMaybe<Scalars['timestamp']['input']>
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>
  _gt?: InputMaybe<Scalars['timestamptz']['input']>
  _gte?: InputMaybe<Scalars['timestamptz']['input']>
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timestamptz']['input']>
  _lte?: InputMaybe<Scalars['timestamptz']['input']>
  _neq?: InputMaybe<Scalars['timestamptz']['input']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>
}

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token'
  name: Scalars['String']['output']
  /** An array relationship */
  token_units: Array<Token_Unit>
}

/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>
  where?: InputMaybe<Token_Unit_Bool_Exp>
}

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>
  _not?: InputMaybe<Token_Bool_Exp>
  _or?: InputMaybe<Array<Token_Bool_Exp>>
  name?: InputMaybe<String_Comparison_Exp>
  token_units?: InputMaybe<Token_Unit_Bool_Exp>
}

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: InputMaybe<Order_By>
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Order_By>
}

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price'
  market_cap: Scalars['bigint']['output']
  price: Scalars['numeric']['output']
  timestamp: Scalars['timestamp']['output']
  /** An object relationship */
  token_unit: Token_Unit
  unit_name: Scalars['String']['output']
}

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Token_Price_Max_Order_By>
  min?: InputMaybe<Token_Price_Min_Order_By>
  stddev?: InputMaybe<Token_Price_Stddev_Order_By>
  stddev_pop?: InputMaybe<Token_Price_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Token_Price_Stddev_Samp_Order_By>
  sum?: InputMaybe<Token_Price_Sum_Order_By>
  var_pop?: InputMaybe<Token_Price_Var_Pop_Order_By>
  var_samp?: InputMaybe<Token_Price_Var_Samp_Order_By>
  variance?: InputMaybe<Token_Price_Variance_Order_By>
}

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_Bool_Exp>>
  _not?: InputMaybe<Token_Price_Bool_Exp>
  _or?: InputMaybe<Array<Token_Price_Bool_Exp>>
  market_cap?: InputMaybe<Bigint_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>
  unit_name?: InputMaybe<String_Comparison_Exp>
}

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history'
  market_cap: Scalars['bigint']['output']
  price: Scalars['numeric']['output']
  timestamp: Scalars['timestamp']['output']
  /** An object relationship */
  token_unit: Token_Unit
  unit_name: Scalars['String']['output']
}

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_History_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Token_Price_History_Max_Order_By>
  min?: InputMaybe<Token_Price_History_Min_Order_By>
  stddev?: InputMaybe<Token_Price_History_Stddev_Order_By>
  stddev_pop?: InputMaybe<Token_Price_History_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Token_Price_History_Stddev_Samp_Order_By>
  sum?: InputMaybe<Token_Price_History_Sum_Order_By>
  var_pop?: InputMaybe<Token_Price_History_Var_Pop_Order_By>
  var_samp?: InputMaybe<Token_Price_History_Var_Samp_Order_By>
  variance?: InputMaybe<Token_Price_History_Variance_Order_By>
}

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_History_Bool_Exp>>
  _not?: InputMaybe<Token_Price_History_Bool_Exp>
  _or?: InputMaybe<Array<Token_Price_History_Bool_Exp>>
  market_cap?: InputMaybe<Bigint_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>
  unit_name?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  token_unit?: InputMaybe<Token_Unit_Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name',
}

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "token_price_history" */
export type Token_Price_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_History_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Token_Price_History_Stream_Cursor_Value_Input = {
  market_cap?: InputMaybe<Scalars['bigint']['input']>
  price?: InputMaybe<Scalars['numeric']['input']>
  timestamp?: InputMaybe<Scalars['timestamp']['input']>
  unit_name?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  token_unit?: InputMaybe<Token_Unit_Order_By>
  unit_name?: InputMaybe<Order_By>
}

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name',
}

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "token_price" */
export type Token_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Token_Price_Stream_Cursor_Value_Input = {
  market_cap?: InputMaybe<Scalars['bigint']['input']>
  price?: InputMaybe<Scalars['numeric']['input']>
  timestamp?: InputMaybe<Scalars['timestamp']['input']>
  unit_name?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
}

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name',
}

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit'
  aliases?: Maybe<Array<Scalars['String']['output']>>
  denom: Scalars['String']['output']
  exponent: Scalars['Int']['output']
  price_id?: Maybe<Scalars['String']['output']>
  /** An object relationship */
  token: Token
  token_name: Scalars['String']['output']
  /** An object relationship */
  token_price?: Maybe<Token_Price>
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>
  /** An array relationship */
  token_prices: Array<Token_Price>
}

/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>
  where?: InputMaybe<Token_Price_History_Bool_Exp>
}

/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Token_Price_Order_By>>
  where?: InputMaybe<Token_Price_Bool_Exp>
}

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Unit_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Token_Unit_Max_Order_By>
  min?: InputMaybe<Token_Unit_Min_Order_By>
  stddev?: InputMaybe<Token_Unit_Stddev_Order_By>
  stddev_pop?: InputMaybe<Token_Unit_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Token_Unit_Stddev_Samp_Order_By>
  sum?: InputMaybe<Token_Unit_Sum_Order_By>
  var_pop?: InputMaybe<Token_Unit_Var_Pop_Order_By>
  var_samp?: InputMaybe<Token_Unit_Var_Samp_Order_By>
  variance?: InputMaybe<Token_Unit_Variance_Order_By>
}

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unit_Bool_Exp>>
  _not?: InputMaybe<Token_Unit_Bool_Exp>
  _or?: InputMaybe<Array<Token_Unit_Bool_Exp>>
  aliases?: InputMaybe<String_Array_Comparison_Exp>
  denom?: InputMaybe<String_Comparison_Exp>
  exponent?: InputMaybe<Int_Comparison_Exp>
  price_id?: InputMaybe<String_Comparison_Exp>
  token?: InputMaybe<Token_Bool_Exp>
  token_name?: InputMaybe<String_Comparison_Exp>
  token_price?: InputMaybe<Token_Price_Bool_Exp>
  token_price_histories?: InputMaybe<Token_Price_History_Bool_Exp>
  token_prices?: InputMaybe<Token_Price_Bool_Exp>
}

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  aliases?: InputMaybe<Order_By>
  denom?: InputMaybe<Order_By>
  exponent?: InputMaybe<Order_By>
  price_id?: InputMaybe<Order_By>
  token_name?: InputMaybe<Order_By>
}

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  aliases?: InputMaybe<Order_By>
  denom?: InputMaybe<Order_By>
  exponent?: InputMaybe<Order_By>
  price_id?: InputMaybe<Order_By>
  token_name?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: InputMaybe<Order_By>
  denom?: InputMaybe<Order_By>
  exponent?: InputMaybe<Order_By>
  price_id?: InputMaybe<Order_By>
  token?: InputMaybe<Token_Order_By>
  token_name?: InputMaybe<Order_By>
  token_price?: InputMaybe<Token_Price_Order_By>
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>
}

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name',
}

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "token_unit" */
export type Token_Unit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Unit_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Token_Unit_Stream_Cursor_Value_Input = {
  aliases?: InputMaybe<Array<Scalars['String']['input']>>
  denom?: InputMaybe<Scalars['String']['input']>
  exponent?: InputMaybe<Scalars['Int']['input']>
  price_id?: InputMaybe<Scalars['String']['input']>
  token_name?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Order_By>
}

/** columns and relationships of "total_message_value" */
export type Total_Message_Value = {
  __typename?: 'total_message_value'
  created_at: Scalars['timestamptz']['output']
  value: Scalars['bigint']['output']
}

/** aggregated selection of "total_message_value" */
export type Total_Message_Value_Aggregate = {
  __typename?: 'total_message_value_aggregate'
  aggregate?: Maybe<Total_Message_Value_Aggregate_Fields>
  nodes: Array<Total_Message_Value>
}

/** aggregate fields of "total_message_value" */
export type Total_Message_Value_Aggregate_Fields = {
  __typename?: 'total_message_value_aggregate_fields'
  avg?: Maybe<Total_Message_Value_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Total_Message_Value_Max_Fields>
  min?: Maybe<Total_Message_Value_Min_Fields>
  stddev?: Maybe<Total_Message_Value_Stddev_Fields>
  stddev_pop?: Maybe<Total_Message_Value_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Total_Message_Value_Stddev_Samp_Fields>
  sum?: Maybe<Total_Message_Value_Sum_Fields>
  var_pop?: Maybe<Total_Message_Value_Var_Pop_Fields>
  var_samp?: Maybe<Total_Message_Value_Var_Samp_Fields>
  variance?: Maybe<Total_Message_Value_Variance_Fields>
}

/** aggregate fields of "total_message_value" */
export type Total_Message_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Total_Message_Value_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Total_Message_Value_Avg_Fields = {
  __typename?: 'total_message_value_avg_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "total_message_value". All fields are combined with a logical 'AND'. */
export type Total_Message_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Total_Message_Value_Bool_Exp>>
  _not?: InputMaybe<Total_Message_Value_Bool_Exp>
  _or?: InputMaybe<Array<Total_Message_Value_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  value?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Total_Message_Value_Max_Fields = {
  __typename?: 'total_message_value_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['bigint']['output']>
}

/** aggregate min on columns */
export type Total_Message_Value_Min_Fields = {
  __typename?: 'total_message_value_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['bigint']['output']>
}

/** Ordering options when selecting data from "total_message_value". */
export type Total_Message_Value_Order_By = {
  created_at?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "total_message_value" */
export enum Total_Message_Value_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Total_Message_Value_Stddev_Fields = {
  __typename?: 'total_message_value_stddev_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Total_Message_Value_Stddev_Pop_Fields = {
  __typename?: 'total_message_value_stddev_pop_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Total_Message_Value_Stddev_Samp_Fields = {
  __typename?: 'total_message_value_stddev_samp_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "total_message_value" */
export type Total_Message_Value_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Total_Message_Value_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Total_Message_Value_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  value?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Total_Message_Value_Sum_Fields = {
  __typename?: 'total_message_value_sum_fields'
  value?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Total_Message_Value_Var_Pop_Fields = {
  __typename?: 'total_message_value_var_pop_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Total_Message_Value_Var_Samp_Fields = {
  __typename?: 'total_message_value_var_samp_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Total_Message_Value_Variance_Fields = {
  __typename?: 'total_message_value_variance_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "total_value_secured" */
export type Total_Value_Secured = {
  __typename?: 'total_value_secured'
  time: Scalars['timestamptz']['output']
  value: Scalars['bigint']['output']
}

/** aggregated selection of "total_value_secured" */
export type Total_Value_Secured_Aggregate = {
  __typename?: 'total_value_secured_aggregate'
  aggregate?: Maybe<Total_Value_Secured_Aggregate_Fields>
  nodes: Array<Total_Value_Secured>
}

/** aggregate fields of "total_value_secured" */
export type Total_Value_Secured_Aggregate_Fields = {
  __typename?: 'total_value_secured_aggregate_fields'
  avg?: Maybe<Total_Value_Secured_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Total_Value_Secured_Max_Fields>
  min?: Maybe<Total_Value_Secured_Min_Fields>
  stddev?: Maybe<Total_Value_Secured_Stddev_Fields>
  stddev_pop?: Maybe<Total_Value_Secured_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Total_Value_Secured_Stddev_Samp_Fields>
  sum?: Maybe<Total_Value_Secured_Sum_Fields>
  var_pop?: Maybe<Total_Value_Secured_Var_Pop_Fields>
  var_samp?: Maybe<Total_Value_Secured_Var_Samp_Fields>
  variance?: Maybe<Total_Value_Secured_Variance_Fields>
}

/** aggregate fields of "total_value_secured" */
export type Total_Value_Secured_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Total_Value_Secured_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Total_Value_Secured_Avg_Fields = {
  __typename?: 'total_value_secured_avg_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "total_value_secured". All fields are combined with a logical 'AND'. */
export type Total_Value_Secured_Bool_Exp = {
  _and?: InputMaybe<Array<Total_Value_Secured_Bool_Exp>>
  _not?: InputMaybe<Total_Value_Secured_Bool_Exp>
  _or?: InputMaybe<Array<Total_Value_Secured_Bool_Exp>>
  time?: InputMaybe<Timestamptz_Comparison_Exp>
  value?: InputMaybe<Bigint_Comparison_Exp>
}

/** aggregate max on columns */
export type Total_Value_Secured_Max_Fields = {
  __typename?: 'total_value_secured_max_fields'
  time?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['bigint']['output']>
}

/** aggregate min on columns */
export type Total_Value_Secured_Min_Fields = {
  __typename?: 'total_value_secured_min_fields'
  time?: Maybe<Scalars['timestamptz']['output']>
  value?: Maybe<Scalars['bigint']['output']>
}

/** Ordering options when selecting data from "total_value_secured". */
export type Total_Value_Secured_Order_By = {
  time?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

/** select columns of table "total_value_secured" */
export enum Total_Value_Secured_Select_Column {
  /** column name */
  Time = 'time',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Total_Value_Secured_Stddev_Fields = {
  __typename?: 'total_value_secured_stddev_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Total_Value_Secured_Stddev_Pop_Fields = {
  __typename?: 'total_value_secured_stddev_pop_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Total_Value_Secured_Stddev_Samp_Fields = {
  __typename?: 'total_value_secured_stddev_samp_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "total_value_secured" */
export type Total_Value_Secured_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Total_Value_Secured_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Total_Value_Secured_Stream_Cursor_Value_Input = {
  time?: InputMaybe<Scalars['timestamptz']['input']>
  value?: InputMaybe<Scalars['bigint']['input']>
}

/** aggregate sum on columns */
export type Total_Value_Secured_Sum_Fields = {
  __typename?: 'total_value_secured_sum_fields'
  value?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Total_Value_Secured_Var_Pop_Fields = {
  __typename?: 'total_value_secured_var_pop_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Total_Value_Secured_Var_Samp_Fields = {
  __typename?: 'total_value_secured_var_samp_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Total_Value_Secured_Variance_Fields = {
  __typename?: 'total_value_secured_variance_fields'
  value?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction'
  /** An object relationship */
  block: Block
  eth_hash?: Maybe<Scalars['String']['output']>
  fee: Scalars['jsonb']['output']
  gas_used?: Maybe<Scalars['bigint']['output']>
  gas_wanted?: Maybe<Scalars['bigint']['output']>
  hash: Scalars['String']['output']
  height: Scalars['bigint']['output']
  logs?: Maybe<Scalars['jsonb']['output']>
  memo?: Maybe<Scalars['String']['output']>
  messages: Scalars['jsonb']['output']
  raw_log?: Maybe<Scalars['String']['output']>
  signatures: Array<Scalars['String']['output']>
  signer_infos: Scalars['jsonb']['output']
  success: Scalars['Boolean']['output']
}

/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']['input']>
}

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate'
  aggregate?: Maybe<Transaction_Aggregate_Fields>
  nodes: Array<Transaction>
}

export type Transaction_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>
}

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Transaction_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Transaction_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Transaction_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields'
  avg?: Maybe<Transaction_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Transaction_Max_Fields>
  min?: Maybe<Transaction_Min_Fields>
  stddev?: Maybe<Transaction_Stddev_Fields>
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>
  sum?: Maybe<Transaction_Sum_Fields>
  var_pop?: Maybe<Transaction_Var_Pop_Fields>
  var_samp?: Maybe<Transaction_Var_Samp_Fields>
  variance?: Maybe<Transaction_Variance_Fields>
}

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Transaction_Max_Order_By>
  min?: InputMaybe<Transaction_Min_Order_By>
  stddev?: InputMaybe<Transaction_Stddev_Order_By>
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>
  sum?: InputMaybe<Transaction_Sum_Order_By>
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>
  variance?: InputMaybe<Transaction_Variance_Order_By>
}

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>
  _not?: InputMaybe<Transaction_Bool_Exp>
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>
  block?: InputMaybe<Block_Bool_Exp>
  eth_hash?: InputMaybe<String_Comparison_Exp>
  fee?: InputMaybe<Jsonb_Comparison_Exp>
  gas_used?: InputMaybe<Bigint_Comparison_Exp>
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>
  hash?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  logs?: InputMaybe<Jsonb_Comparison_Exp>
  memo?: InputMaybe<String_Comparison_Exp>
  messages?: InputMaybe<Jsonb_Comparison_Exp>
  raw_log?: InputMaybe<String_Comparison_Exp>
  signatures?: InputMaybe<String_Array_Comparison_Exp>
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>
  success?: InputMaybe<Boolean_Comparison_Exp>
}

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields'
  eth_hash?: Maybe<Scalars['String']['output']>
  gas_used?: Maybe<Scalars['bigint']['output']>
  gas_wanted?: Maybe<Scalars['bigint']['output']>
  hash?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['bigint']['output']>
  memo?: Maybe<Scalars['String']['output']>
  raw_log?: Maybe<Scalars['String']['output']>
  signatures?: Maybe<Array<Scalars['String']['output']>>
}

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  eth_hash?: InputMaybe<Order_By>
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  memo?: InputMaybe<Order_By>
  raw_log?: InputMaybe<Order_By>
  signatures?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields'
  eth_hash?: Maybe<Scalars['String']['output']>
  gas_used?: Maybe<Scalars['bigint']['output']>
  gas_wanted?: Maybe<Scalars['bigint']['output']>
  hash?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['bigint']['output']>
  memo?: Maybe<Scalars['String']['output']>
  raw_log?: Maybe<Scalars['String']['output']>
  signatures?: Maybe<Array<Scalars['String']['output']>>
}

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  eth_hash?: InputMaybe<Order_By>
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  memo?: InputMaybe<Order_By>
  raw_log?: InputMaybe<Order_By>
  signatures?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>
  eth_hash?: InputMaybe<Order_By>
  fee?: InputMaybe<Order_By>
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  hash?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  logs?: InputMaybe<Order_By>
  memo?: InputMaybe<Order_By>
  messages?: InputMaybe<Order_By>
  raw_log?: InputMaybe<Order_By>
  signatures?: InputMaybe<Order_By>
  signer_infos?: InputMaybe<Order_By>
  success?: InputMaybe<Order_By>
}

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  EthHash = 'eth_hash',
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success',
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success',
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success',
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  eth_hash?: InputMaybe<Scalars['String']['input']>
  fee?: InputMaybe<Scalars['jsonb']['input']>
  gas_used?: InputMaybe<Scalars['bigint']['input']>
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  logs?: InputMaybe<Scalars['jsonb']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  messages?: InputMaybe<Scalars['jsonb']['input']>
  raw_log?: InputMaybe<Scalars['String']['input']>
  signatures?: InputMaybe<Array<Scalars['String']['input']>>
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>
  success?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields'
  gas_used?: Maybe<Scalars['bigint']['output']>
  gas_wanted?: Maybe<Scalars['bigint']['output']>
  height?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields'
  gas_used?: Maybe<Scalars['Float']['output']>
  gas_wanted?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>
  gas_wanted?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "usd_rate" */
export type Usd_Rate = {
  __typename?: 'usd_rate'
  currency: Scalars['String']['output']
  rate: Scalars['Float']['output']
}

/** aggregated selection of "usd_rate" */
export type Usd_Rate_Aggregate = {
  __typename?: 'usd_rate_aggregate'
  aggregate?: Maybe<Usd_Rate_Aggregate_Fields>
  nodes: Array<Usd_Rate>
}

/** aggregate fields of "usd_rate" */
export type Usd_Rate_Aggregate_Fields = {
  __typename?: 'usd_rate_aggregate_fields'
  avg?: Maybe<Usd_Rate_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Usd_Rate_Max_Fields>
  min?: Maybe<Usd_Rate_Min_Fields>
  stddev?: Maybe<Usd_Rate_Stddev_Fields>
  stddev_pop?: Maybe<Usd_Rate_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Usd_Rate_Stddev_Samp_Fields>
  sum?: Maybe<Usd_Rate_Sum_Fields>
  var_pop?: Maybe<Usd_Rate_Var_Pop_Fields>
  var_samp?: Maybe<Usd_Rate_Var_Samp_Fields>
  variance?: Maybe<Usd_Rate_Variance_Fields>
}

/** aggregate fields of "usd_rate" */
export type Usd_Rate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Usd_Rate_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Usd_Rate_Avg_Fields = {
  __typename?: 'usd_rate_avg_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "usd_rate". All fields are combined with a logical 'AND'. */
export type Usd_Rate_Bool_Exp = {
  _and?: InputMaybe<Array<Usd_Rate_Bool_Exp>>
  _not?: InputMaybe<Usd_Rate_Bool_Exp>
  _or?: InputMaybe<Array<Usd_Rate_Bool_Exp>>
  currency?: InputMaybe<String_Comparison_Exp>
  rate?: InputMaybe<Float_Comparison_Exp>
}

/** aggregate max on columns */
export type Usd_Rate_Max_Fields = {
  __typename?: 'usd_rate_max_fields'
  currency?: Maybe<Scalars['String']['output']>
  rate?: Maybe<Scalars['Float']['output']>
}

/** aggregate min on columns */
export type Usd_Rate_Min_Fields = {
  __typename?: 'usd_rate_min_fields'
  currency?: Maybe<Scalars['String']['output']>
  rate?: Maybe<Scalars['Float']['output']>
}

/** Ordering options when selecting data from "usd_rate". */
export type Usd_Rate_Order_By = {
  currency?: InputMaybe<Order_By>
  rate?: InputMaybe<Order_By>
}

/** select columns of table "usd_rate" */
export enum Usd_Rate_Select_Column {
  /** column name */
  Currency = 'currency',
  /** column name */
  Rate = 'rate',
}

/** aggregate stddev on columns */
export type Usd_Rate_Stddev_Fields = {
  __typename?: 'usd_rate_stddev_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Usd_Rate_Stddev_Pop_Fields = {
  __typename?: 'usd_rate_stddev_pop_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Usd_Rate_Stddev_Samp_Fields = {
  __typename?: 'usd_rate_stddev_samp_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "usd_rate" */
export type Usd_Rate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Usd_Rate_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Usd_Rate_Stream_Cursor_Value_Input = {
  currency?: InputMaybe<Scalars['String']['input']>
  rate?: InputMaybe<Scalars['Float']['input']>
}

/** aggregate sum on columns */
export type Usd_Rate_Sum_Fields = {
  __typename?: 'usd_rate_sum_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_pop on columns */
export type Usd_Rate_Var_Pop_Fields = {
  __typename?: 'usd_rate_var_pop_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Usd_Rate_Var_Samp_Fields = {
  __typename?: 'usd_rate_var_samp_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Usd_Rate_Variance_Fields = {
  __typename?: 'usd_rate_variance_fields'
  rate?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "user_account" */
export type User_Account = {
  __typename?: 'user_account'
  address: Scalars['String']['output']
  name: Scalars['String']['output']
  network: Scalars['String']['output']
}

/** aggregated selection of "user_account" */
export type User_Account_Aggregate = {
  __typename?: 'user_account_aggregate'
  aggregate?: Maybe<User_Account_Aggregate_Fields>
  nodes: Array<User_Account>
}

/** aggregate fields of "user_account" */
export type User_Account_Aggregate_Fields = {
  __typename?: 'user_account_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<User_Account_Max_Fields>
  min?: Maybe<User_Account_Min_Fields>
}

/** aggregate fields of "user_account" */
export type User_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Account_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "user_account". All fields are combined with a logical 'AND'. */
export type User_Account_Bool_Exp = {
  _and?: InputMaybe<Array<User_Account_Bool_Exp>>
  _not?: InputMaybe<User_Account_Bool_Exp>
  _or?: InputMaybe<Array<User_Account_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  network?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type User_Account_Max_Fields = {
  __typename?: 'user_account_max_fields'
  address?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  network?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type User_Account_Min_Fields = {
  __typename?: 'user_account_min_fields'
  address?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  network?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "user_account" */
export type User_Account_Mutation_Response = {
  __typename?: 'user_account_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<User_Account>
}

/** Ordering options when selecting data from "user_account". */
export type User_Account_Order_By = {
  address?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
}

/** select columns of table "user_account" */
export enum User_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Name = 'name',
  /** column name */
  Network = 'network',
}

/** input type for updating data in table "user_account" */
export type User_Account_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  network?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "user_account" */
export type User_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Account_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  network?: InputMaybe<Scalars['String']['input']>
}

export type User_Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Account_Set_Input>
  /** filter the rows which have to be updated */
  where: User_Account_Bool_Exp
}

/** Boolean expression to compare columns of type "user_entangle_bridge_operation_type". All fields are combined with logical 'AND'. */
export type User_Entangle_Bridge_Operation_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  _gt?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  _gte?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  _in?: InputMaybe<Array<Scalars['user_entangle_bridge_operation_type']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  _lte?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  _neq?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  _nin?: InputMaybe<Array<Scalars['user_entangle_bridge_operation_type']['input']>>
}

/** columns and relationships of "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations = {
  __typename?: 'user_entangle_bridge_operations'
  amount: Scalars['String']['output']
  network: Scalars['String']['output']
  /** An object relationship */
  operation: Operations
  operation_id: Scalars['bigint']['output']
  /** An object relationship */
  protocol: Protocol
  protocol_id: Scalars['String']['output']
  timestamp: Scalars['timestamptz']['output']
  tx_hash: Scalars['String']['output']
  type: Scalars['user_entangle_bridge_operation_type']['output']
  user_address: Scalars['String']['output']
}

/** aggregated selection of "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Aggregate = {
  __typename?: 'user_entangle_bridge_operations_aggregate'
  aggregate?: Maybe<User_Entangle_Bridge_Operations_Aggregate_Fields>
  nodes: Array<User_Entangle_Bridge_Operations>
}

export type User_Entangle_Bridge_Operations_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Entangle_Bridge_Operations_Aggregate_Bool_Exp_Count>
}

export type User_Entangle_Bridge_Operations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Aggregate_Fields = {
  __typename?: 'user_entangle_bridge_operations_aggregate_fields'
  avg?: Maybe<User_Entangle_Bridge_Operations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<User_Entangle_Bridge_Operations_Max_Fields>
  min?: Maybe<User_Entangle_Bridge_Operations_Min_Fields>
  stddev?: Maybe<User_Entangle_Bridge_Operations_Stddev_Fields>
  stddev_pop?: Maybe<User_Entangle_Bridge_Operations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Entangle_Bridge_Operations_Stddev_Samp_Fields>
  sum?: Maybe<User_Entangle_Bridge_Operations_Sum_Fields>
  var_pop?: Maybe<User_Entangle_Bridge_Operations_Var_Pop_Fields>
  var_samp?: Maybe<User_Entangle_Bridge_Operations_Var_Samp_Fields>
  variance?: Maybe<User_Entangle_Bridge_Operations_Variance_Fields>
}

/** aggregate fields of "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Entangle_Bridge_Operations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Aggregate_Order_By = {
  avg?: InputMaybe<User_Entangle_Bridge_Operations_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<User_Entangle_Bridge_Operations_Max_Order_By>
  min?: InputMaybe<User_Entangle_Bridge_Operations_Min_Order_By>
  stddev?: InputMaybe<User_Entangle_Bridge_Operations_Stddev_Order_By>
  stddev_pop?: InputMaybe<User_Entangle_Bridge_Operations_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<User_Entangle_Bridge_Operations_Stddev_Samp_Order_By>
  sum?: InputMaybe<User_Entangle_Bridge_Operations_Sum_Order_By>
  var_pop?: InputMaybe<User_Entangle_Bridge_Operations_Var_Pop_Order_By>
  var_samp?: InputMaybe<User_Entangle_Bridge_Operations_Var_Samp_Order_By>
  variance?: InputMaybe<User_Entangle_Bridge_Operations_Variance_Order_By>
}

/** aggregate avg on columns */
export type User_Entangle_Bridge_Operations_Avg_Fields = {
  __typename?: 'user_entangle_bridge_operations_avg_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Avg_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_entangle_bridge_operations". All fields are combined with a logical 'AND'. */
export type User_Entangle_Bridge_Operations_Bool_Exp = {
  _and?: InputMaybe<Array<User_Entangle_Bridge_Operations_Bool_Exp>>
  _not?: InputMaybe<User_Entangle_Bridge_Operations_Bool_Exp>
  _or?: InputMaybe<Array<User_Entangle_Bridge_Operations_Bool_Exp>>
  amount?: InputMaybe<String_Comparison_Exp>
  network?: InputMaybe<String_Comparison_Exp>
  operation?: InputMaybe<Operations_Bool_Exp>
  operation_id?: InputMaybe<Bigint_Comparison_Exp>
  protocol?: InputMaybe<Protocol_Bool_Exp>
  protocol_id?: InputMaybe<String_Comparison_Exp>
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>
  tx_hash?: InputMaybe<String_Comparison_Exp>
  type?: InputMaybe<User_Entangle_Bridge_Operation_Type_Comparison_Exp>
  user_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type User_Entangle_Bridge_Operations_Max_Fields = {
  __typename?: 'user_entangle_bridge_operations_max_fields'
  amount?: Maybe<Scalars['String']['output']>
  network?: Maybe<Scalars['String']['output']>
  operation_id?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  timestamp?: Maybe<Scalars['timestamptz']['output']>
  tx_hash?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['user_entangle_bridge_operation_type']['output']>
  user_address?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Max_Order_By = {
  amount?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
  operation_id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  tx_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  user_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type User_Entangle_Bridge_Operations_Min_Fields = {
  __typename?: 'user_entangle_bridge_operations_min_fields'
  amount?: Maybe<Scalars['String']['output']>
  network?: Maybe<Scalars['String']['output']>
  operation_id?: Maybe<Scalars['bigint']['output']>
  protocol_id?: Maybe<Scalars['String']['output']>
  timestamp?: Maybe<Scalars['timestamptz']['output']>
  tx_hash?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['user_entangle_bridge_operation_type']['output']>
  user_address?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Min_Order_By = {
  amount?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
  operation_id?: InputMaybe<Order_By>
  protocol_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  tx_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  user_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "user_entangle_bridge_operations". */
export type User_Entangle_Bridge_Operations_Order_By = {
  amount?: InputMaybe<Order_By>
  network?: InputMaybe<Order_By>
  operation?: InputMaybe<Operations_Order_By>
  operation_id?: InputMaybe<Order_By>
  protocol?: InputMaybe<Protocol_Order_By>
  protocol_id?: InputMaybe<Order_By>
  timestamp?: InputMaybe<Order_By>
  tx_hash?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  user_address?: InputMaybe<Order_By>
}

/** select columns of table "user_entangle_bridge_operations" */
export enum User_Entangle_Bridge_Operations_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Network = 'network',
  /** column name */
  OperationId = 'operation_id',
  /** column name */
  ProtocolId = 'protocol_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  Type = 'type',
  /** column name */
  UserAddress = 'user_address',
}

/** aggregate stddev on columns */
export type User_Entangle_Bridge_Operations_Stddev_Fields = {
  __typename?: 'user_entangle_bridge_operations_stddev_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Stddev_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Entangle_Bridge_Operations_Stddev_Pop_Fields = {
  __typename?: 'user_entangle_bridge_operations_stddev_pop_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Stddev_Pop_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Entangle_Bridge_Operations_Stddev_Samp_Fields = {
  __typename?: 'user_entangle_bridge_operations_stddev_samp_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Stddev_Samp_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Entangle_Bridge_Operations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Entangle_Bridge_Operations_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['String']['input']>
  network?: InputMaybe<Scalars['String']['input']>
  operation_id?: InputMaybe<Scalars['bigint']['input']>
  protocol_id?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>
  tx_hash?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['user_entangle_bridge_operation_type']['input']>
  user_address?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type User_Entangle_Bridge_Operations_Sum_Fields = {
  __typename?: 'user_entangle_bridge_operations_sum_fields'
  operation_id?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Sum_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type User_Entangle_Bridge_Operations_Var_Pop_Fields = {
  __typename?: 'user_entangle_bridge_operations_var_pop_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Var_Pop_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Entangle_Bridge_Operations_Var_Samp_Fields = {
  __typename?: 'user_entangle_bridge_operations_var_samp_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Var_Samp_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type User_Entangle_Bridge_Operations_Variance_Fields = {
  __typename?: 'user_entangle_bridge_operations_variance_fields'
  operation_id?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "user_entangle_bridge_operations" */
export type User_Entangle_Bridge_Operations_Variance_Order_By = {
  operation_id?: InputMaybe<Order_By>
}

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator'
  /** An array relationship */
  blocks: Array<Block>
  consensus_address: Scalars['String']['output']
  consensus_pubkey: Scalars['String']['output']
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>
  /** An array relationship */
  pre_commits: Array<Pre_Commit>
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate
  /** An object relationship */
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot>
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>
  /** An object relationship */
  real_voting_power?: Maybe<Real_Voting_Power>
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>
  /** An array relationship */
  validator_delegations: Array<Validator_Delegations>
  /** An aggregate relationship */
  validator_delegations_aggregate: Validator_Delegations_Aggregate
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>
  /** An array relationship */
  validator_infos: Array<Validator_Info>
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>
  /** An array relationship */
  validator_statuses: Array<Validator_Status>
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate
}

/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Block_Order_By>>
  where?: InputMaybe<Block_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>
  where?: InputMaybe<Pre_Commit_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>
  where?: InputMaybe<Validator_Commission_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_DelegationsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Delegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Delegations_Order_By>>
  where?: InputMaybe<Validator_Delegations_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>
  where?: InputMaybe<Validator_Description_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>
  where?: InputMaybe<Validator_Info_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>
  where?: InputMaybe<Validator_Status_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>
}

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>
  _not?: InputMaybe<Validator_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Bool_Exp>>
  blocks?: InputMaybe<Block_Bool_Exp>
  consensus_address?: InputMaybe<String_Comparison_Exp>
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Bool_Exp>
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>
  real_voting_power?: InputMaybe<Real_Voting_Power_Bool_Exp>
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>
  validator_delegations?: InputMaybe<Validator_Delegations_Bool_Exp>
  validator_delegations_aggregate?: InputMaybe<Validator_Delegations_Aggregate_Bool_Exp>
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Bool_Exp>
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>
}

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission'
  commission: Scalars['numeric']['output']
  height: Scalars['bigint']['output']
  min_self_delegation: Scalars['bigint']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
}

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Commission_Max_Order_By>
  min?: InputMaybe<Validator_Commission_Min_Order_By>
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>
}

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>
  _not?: InputMaybe<Validator_Commission_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>
  commission?: InputMaybe<Numeric_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address',
}

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator_commission" */
export type Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commission_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  min_self_delegation?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_delegations" */
export type Validator_Delegations = {
  __typename?: 'validator_delegations'
  /** An object relationship */
  block: Block
  height: Scalars['bigint']['output']
  self_delegation: Scalars['String']['output']
  total_delegations: Scalars['String']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
}

/** aggregated selection of "validator_delegations" */
export type Validator_Delegations_Aggregate = {
  __typename?: 'validator_delegations_aggregate'
  aggregate?: Maybe<Validator_Delegations_Aggregate_Fields>
  nodes: Array<Validator_Delegations>
}

export type Validator_Delegations_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Delegations_Aggregate_Bool_Exp_Count>
}

export type Validator_Delegations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Validator_Delegations_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "validator_delegations" */
export type Validator_Delegations_Aggregate_Fields = {
  __typename?: 'validator_delegations_aggregate_fields'
  avg?: Maybe<Validator_Delegations_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Validator_Delegations_Max_Fields>
  min?: Maybe<Validator_Delegations_Min_Fields>
  stddev?: Maybe<Validator_Delegations_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Delegations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Delegations_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Delegations_Sum_Fields>
  var_pop?: Maybe<Validator_Delegations_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Delegations_Var_Samp_Fields>
  variance?: Maybe<Validator_Delegations_Variance_Fields>
}

/** aggregate fields of "validator_delegations" */
export type Validator_Delegations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Delegations_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "validator_delegations" */
export type Validator_Delegations_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Delegations_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Delegations_Max_Order_By>
  min?: InputMaybe<Validator_Delegations_Min_Order_By>
  stddev?: InputMaybe<Validator_Delegations_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Delegations_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Delegations_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Delegations_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Delegations_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Delegations_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Delegations_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Delegations_Avg_Fields = {
  __typename?: 'validator_delegations_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "validator_delegations" */
export type Validator_Delegations_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_delegations". All fields are combined with a logical 'AND'. */
export type Validator_Delegations_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Delegations_Bool_Exp>>
  _not?: InputMaybe<Validator_Delegations_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Delegations_Bool_Exp>>
  block?: InputMaybe<Block_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  self_delegation?: InputMaybe<String_Comparison_Exp>
  total_delegations?: InputMaybe<String_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Delegations_Max_Fields = {
  __typename?: 'validator_delegations_max_fields'
  height?: Maybe<Scalars['bigint']['output']>
  self_delegation?: Maybe<Scalars['String']['output']>
  total_delegations?: Maybe<Scalars['String']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "validator_delegations" */
export type Validator_Delegations_Max_Order_By = {
  height?: InputMaybe<Order_By>
  self_delegation?: InputMaybe<Order_By>
  total_delegations?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Delegations_Min_Fields = {
  __typename?: 'validator_delegations_min_fields'
  height?: Maybe<Scalars['bigint']['output']>
  self_delegation?: Maybe<Scalars['String']['output']>
  total_delegations?: Maybe<Scalars['String']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "validator_delegations" */
export type Validator_Delegations_Min_Order_By = {
  height?: InputMaybe<Order_By>
  self_delegation?: InputMaybe<Order_By>
  total_delegations?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_delegations". */
export type Validator_Delegations_Order_By = {
  block?: InputMaybe<Block_Order_By>
  height?: InputMaybe<Order_By>
  self_delegation?: InputMaybe<Order_By>
  total_delegations?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_delegations" */
export enum Validator_Delegations_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  SelfDelegation = 'self_delegation',
  /** column name */
  TotalDelegations = 'total_delegations',
  /** column name */
  ValidatorAddress = 'validator_address',
}

/** aggregate stddev on columns */
export type Validator_Delegations_Stddev_Fields = {
  __typename?: 'validator_delegations_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "validator_delegations" */
export type Validator_Delegations_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Delegations_Stddev_Pop_Fields = {
  __typename?: 'validator_delegations_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "validator_delegations" */
export type Validator_Delegations_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Delegations_Stddev_Samp_Fields = {
  __typename?: 'validator_delegations_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "validator_delegations" */
export type Validator_Delegations_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator_delegations" */
export type Validator_Delegations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Delegations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Delegations_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  self_delegation?: InputMaybe<Scalars['String']['input']>
  total_delegations?: InputMaybe<Scalars['String']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Validator_Delegations_Sum_Fields = {
  __typename?: 'validator_delegations_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "validator_delegations" */
export type Validator_Delegations_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Delegations_Var_Pop_Fields = {
  __typename?: 'validator_delegations_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "validator_delegations" */
export type Validator_Delegations_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Delegations_Var_Samp_Fields = {
  __typename?: 'validator_delegations_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "validator_delegations" */
export type Validator_Delegations_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Delegations_Variance_Fields = {
  __typename?: 'validator_delegations_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "validator_delegations" */
export type Validator_Delegations_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description'
  avatar_url?: Maybe<Scalars['String']['output']>
  details?: Maybe<Scalars['String']['output']>
  height: Scalars['bigint']['output']
  identity?: Maybe<Scalars['String']['output']>
  moniker?: Maybe<Scalars['String']['output']>
  security_contact?: Maybe<Scalars['String']['output']>
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
  website?: Maybe<Scalars['String']['output']>
}

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Description_Max_Order_By>
  min?: InputMaybe<Validator_Description_Min_Order_By>
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Description_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Description_Variance_Order_By>
}

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>
  _not?: InputMaybe<Validator_Description_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>
  avatar_url?: InputMaybe<String_Comparison_Exp>
  details?: InputMaybe<String_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  identity?: InputMaybe<String_Comparison_Exp>
  moniker?: InputMaybe<String_Comparison_Exp>
  security_contact?: InputMaybe<String_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  website?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  details?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  identity?: InputMaybe<Order_By>
  moniker?: InputMaybe<Order_By>
  security_contact?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  website?: InputMaybe<Order_By>
}

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  details?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  identity?: InputMaybe<Order_By>
  moniker?: InputMaybe<Order_By>
  security_contact?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  website?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  details?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  identity?: InputMaybe<Order_By>
  moniker?: InputMaybe<Order_By>
  security_contact?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  website?: InputMaybe<Order_By>
}

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website',
}

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator_description" */
export type Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Description_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>
  details?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  identity?: InputMaybe<Scalars['String']['input']>
  moniker?: InputMaybe<Scalars['String']['input']>
  security_contact?: InputMaybe<Scalars['String']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
  website?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info'
  /** An object relationship */
  account?: Maybe<Account>
  consensus_address: Scalars['String']['output']
  max_change_rate: Scalars['String']['output']
  max_rate: Scalars['String']['output']
  operator_address: Scalars['String']['output']
  self_delegate_address?: Maybe<Scalars['String']['output']>
  /** An object relationship */
  validator: Validator
}

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Info_Max_Order_By>
  min?: InputMaybe<Validator_Info_Min_Order_By>
}

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>
  _not?: InputMaybe<Validator_Info_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  consensus_address?: InputMaybe<String_Comparison_Exp>
  max_change_rate?: InputMaybe<String_Comparison_Exp>
  max_rate?: InputMaybe<String_Comparison_Exp>
  operator_address?: InputMaybe<String_Comparison_Exp>
  self_delegate_address?: InputMaybe<String_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
}

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>
  max_change_rate?: InputMaybe<Order_By>
  max_rate?: InputMaybe<Order_By>
  operator_address?: InputMaybe<Order_By>
  self_delegate_address?: InputMaybe<Order_By>
}

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>
  max_change_rate?: InputMaybe<Order_By>
  max_rate?: InputMaybe<Order_By>
  operator_address?: InputMaybe<Order_By>
  self_delegate_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>
  consensus_address?: InputMaybe<Order_By>
  max_change_rate?: InputMaybe<Order_By>
  max_rate?: InputMaybe<Order_By>
  operator_address?: InputMaybe<Order_By>
  self_delegate_address?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
}

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address',
}

/** Streaming cursor of the table "validator_info" */
export type Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Info_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>
  max_change_rate?: InputMaybe<Scalars['String']['input']>
  max_rate?: InputMaybe<Scalars['String']['input']>
  operator_address?: InputMaybe<Scalars['String']['input']>
  self_delegate_address?: InputMaybe<Scalars['String']['input']>
}

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>
  consensus_address?: InputMaybe<Order_By>
  consensus_pubkey?: InputMaybe<Order_By>
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Order_By>
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Order_By>
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>
  real_voting_power?: InputMaybe<Real_Voting_Power_Order_By>
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>
  validator_delegations_aggregate?: InputMaybe<Validator_Delegations_Aggregate_Order_By>
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>
  validator_info?: InputMaybe<Validator_Info_Order_By>
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Order_By>
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>
}

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey',
}

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info'
  height: Scalars['bigint']['output']
  index_offset: Scalars['bigint']['output']
  jailed_until: Scalars['timestamp']['output']
  missed_blocks_counter: Scalars['bigint']['output']
  start_height: Scalars['bigint']['output']
  tombstoned: Scalars['Boolean']['output']
  validator_address: Scalars['String']['output']
}

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Signing_Info_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Signing_Info_Max_Order_By>
  min?: InputMaybe<Validator_Signing_Info_Min_Order_By>
  stddev?: InputMaybe<Validator_Signing_Info_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Signing_Info_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Signing_Info_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Signing_Info_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Signing_Info_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Signing_Info_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Signing_Info_Variance_Order_By>
}

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>
  _not?: InputMaybe<Validator_Signing_Info_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  index_offset?: InputMaybe<Bigint_Comparison_Exp>
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>
  start_height?: InputMaybe<Bigint_Comparison_Exp>
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  jailed_until?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  jailed_until?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  jailed_until?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
  tombstoned?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address',
}

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator_signing_info" */
export type Validator_Signing_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Signing_Info_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Signing_Info_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  index_offset?: InputMaybe<Scalars['bigint']['input']>
  jailed_until?: InputMaybe<Scalars['timestamp']['input']>
  missed_blocks_counter?: InputMaybe<Scalars['bigint']['input']>
  start_height?: InputMaybe<Scalars['bigint']['input']>
  tombstoned?: InputMaybe<Scalars['Boolean']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
}

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  index_offset?: InputMaybe<Order_By>
  missed_blocks_counter?: InputMaybe<Order_By>
  start_height?: InputMaybe<Order_By>
}

/** columns and relationships of "validator_stats" */
export type Validator_Stats = {
  __typename?: 'validator_stats'
  apr: Scalars['Int']['output']
  height: Scalars['bigint']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
}

/** aggregated selection of "validator_stats" */
export type Validator_Stats_Aggregate = {
  __typename?: 'validator_stats_aggregate'
  aggregate?: Maybe<Validator_Stats_Aggregate_Fields>
  nodes: Array<Validator_Stats>
}

/** aggregate fields of "validator_stats" */
export type Validator_Stats_Aggregate_Fields = {
  __typename?: 'validator_stats_aggregate_fields'
  avg?: Maybe<Validator_Stats_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Validator_Stats_Max_Fields>
  min?: Maybe<Validator_Stats_Min_Fields>
  stddev?: Maybe<Validator_Stats_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Stats_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Stats_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Stats_Sum_Fields>
  var_pop?: Maybe<Validator_Stats_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Stats_Var_Samp_Fields>
  variance?: Maybe<Validator_Stats_Variance_Fields>
}

/** aggregate fields of "validator_stats" */
export type Validator_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Stats_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** aggregate avg on columns */
export type Validator_Stats_Avg_Fields = {
  __typename?: 'validator_stats_avg_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** Boolean expression to filter rows from the table "validator_stats". All fields are combined with a logical 'AND'. */
export type Validator_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Stats_Bool_Exp>>
  _not?: InputMaybe<Validator_Stats_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Stats_Bool_Exp>>
  apr?: InputMaybe<Int_Comparison_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Stats_Max_Fields = {
  __typename?: 'validator_stats_max_fields'
  apr?: Maybe<Scalars['Int']['output']>
  height?: Maybe<Scalars['bigint']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type Validator_Stats_Min_Fields = {
  __typename?: 'validator_stats_min_fields'
  apr?: Maybe<Scalars['Int']['output']>
  height?: Maybe<Scalars['bigint']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
}

/** Ordering options when selecting data from "validator_stats". */
export type Validator_Stats_Order_By = {
  apr?: InputMaybe<Order_By>
  height?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_stats" */
export enum Validator_Stats_Select_Column {
  /** column name */
  Apr = 'apr',
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
}

/** aggregate stddev on columns */
export type Validator_Stats_Stddev_Fields = {
  __typename?: 'validator_stats_stddev_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_pop on columns */
export type Validator_Stats_Stddev_Pop_Fields = {
  __typename?: 'validator_stats_stddev_pop_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate stddev_samp on columns */
export type Validator_Stats_Stddev_Samp_Fields = {
  __typename?: 'validator_stats_stddev_samp_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** Streaming cursor of the table "validator_stats" */
export type Validator_Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stats_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Stats_Stream_Cursor_Value_Input = {
  apr?: InputMaybe<Scalars['Int']['input']>
  height?: InputMaybe<Scalars['bigint']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Validator_Stats_Sum_Fields = {
  __typename?: 'validator_stats_sum_fields'
  apr?: Maybe<Scalars['Int']['output']>
  height?: Maybe<Scalars['bigint']['output']>
}

/** aggregate var_pop on columns */
export type Validator_Stats_Var_Pop_Fields = {
  __typename?: 'validator_stats_var_pop_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate var_samp on columns */
export type Validator_Stats_Var_Samp_Fields = {
  __typename?: 'validator_stats_var_samp_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** aggregate variance on columns */
export type Validator_Stats_Variance_Fields = {
  __typename?: 'validator_stats_variance_fields'
  apr?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
}

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status'
  height: Scalars['bigint']['output']
  jailed: Scalars['Boolean']['output']
  status: Scalars['Int']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
}

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate'
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>
  nodes: Array<Validator_Status>
}

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Count>
}

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Validator_Status_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Validator_Status_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Status_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Validator_Status_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields'
  avg?: Maybe<Validator_Status_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Validator_Status_Max_Fields>
  min?: Maybe<Validator_Status_Min_Fields>
  stddev?: Maybe<Validator_Status_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Status_Sum_Fields>
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>
  variance?: Maybe<Validator_Status_Variance_Fields>
}

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Status_Max_Order_By>
  min?: InputMaybe<Validator_Status_Min_Order_By>
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Status_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Status_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>
  _not?: InputMaybe<Validator_Status_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>
  height?: InputMaybe<Bigint_Comparison_Exp>
  jailed?: InputMaybe<Boolean_Comparison_Exp>
  status?: InputMaybe<Int_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields'
  height?: Maybe<Scalars['bigint']['output']>
  status?: Maybe<Scalars['Int']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields'
  height?: Maybe<Scalars['bigint']['output']>
  status?: Maybe<Scalars['Int']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>
  jailed?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
}

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed',
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed',
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  jailed?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
  status?: Maybe<Scalars['Int']['output']>
}

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
  status?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator" */
export type Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power'
  /** An object relationship */
  block: Block
  height: Scalars['bigint']['output']
  /** An object relationship */
  validator: Validator
  validator_address: Scalars['String']['output']
  voting_power: Scalars['String']['output']
}

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate'
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>
  nodes: Array<Validator_Voting_Power>
}

export type Validator_Voting_Power_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp_Count>
}

export type Validator_Voting_Power_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
  filter?: InputMaybe<Validator_Voting_Power_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields'
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>
  count: Scalars['Int']['output']
  max?: Maybe<Validator_Voting_Power_Max_Fields>
  min?: Maybe<Validator_Voting_Power_Min_Fields>
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>
}

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>
}

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>
  block?: InputMaybe<Block_Bool_Exp>
  height?: InputMaybe<Bigint_Comparison_Exp>
  validator?: InputMaybe<Validator_Bool_Exp>
  validator_address?: InputMaybe<String_Comparison_Exp>
  voting_power?: InputMaybe<String_Comparison_Exp>
}

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields'
  height?: Maybe<Scalars['bigint']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['String']['output']>
}

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields'
  height?: Maybe<Scalars['bigint']['output']>
  validator_address?: Maybe<Scalars['String']['output']>
  voting_power?: Maybe<Scalars['String']['output']>
}

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Block_Order_By>
  height?: InputMaybe<Order_By>
  validator?: InputMaybe<Validator_Order_By>
  validator_address?: InputMaybe<Order_By>
  voting_power?: InputMaybe<Order_By>
}

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power',
}

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "validator_voting_power" */
export type Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Power_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>
  validator_address?: InputMaybe<Scalars['String']['input']>
  voting_power?: InputMaybe<Scalars['String']['input']>
}

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields'
  height?: Maybe<Scalars['bigint']['output']>
}

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields'
  height?: Maybe<Scalars['Float']['output']>
}

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>
}

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account'
  /** An object relationship */
  account: Account
  address: Scalars['String']['output']
  end_time: Scalars['timestamp']['output']
  original_vesting: Array<Scalars['coin']['output']>
  start_time?: Maybe<Scalars['timestamp']['output']>
  type: Scalars['String']['output']
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>
}

/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>
  where?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** order by aggregate values of table "vesting_account" */
export type Vesting_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Vesting_Account_Max_Order_By>
  min?: InputMaybe<Vesting_Account_Min_Order_By>
}

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Account_Bool_Exp>>
  _not?: InputMaybe<Vesting_Account_Bool_Exp>
  _or?: InputMaybe<Array<Vesting_Account_Bool_Exp>>
  account?: InputMaybe<Account_Bool_Exp>
  address?: InputMaybe<String_Comparison_Exp>
  end_time?: InputMaybe<Timestamp_Comparison_Exp>
  original_vesting?: InputMaybe<Coin_Array_Comparison_Exp>
  start_time?: InputMaybe<Timestamp_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
  vesting_periods?: InputMaybe<Vesting_Period_Bool_Exp>
}

/** order by max() on columns of table "vesting_account" */
export type Vesting_Account_Max_Order_By = {
  address?: InputMaybe<Order_By>
  end_time?: InputMaybe<Order_By>
  original_vesting?: InputMaybe<Order_By>
  start_time?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** order by min() on columns of table "vesting_account" */
export type Vesting_Account_Min_Order_By = {
  address?: InputMaybe<Order_By>
  end_time?: InputMaybe<Order_By>
  original_vesting?: InputMaybe<Order_By>
  start_time?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: InputMaybe<Account_Order_By>
  address?: InputMaybe<Order_By>
  end_time?: InputMaybe<Order_By>
  original_vesting?: InputMaybe<Order_By>
  start_time?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Order_By>
}

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type',
}

/** Streaming cursor of the table "vesting_account" */
export type Vesting_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Account_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Vesting_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  end_time?: InputMaybe<Scalars['timestamp']['input']>
  original_vesting?: InputMaybe<Array<Scalars['coin']['input']>>
  start_time?: InputMaybe<Scalars['timestamp']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period'
  amount: Array<Scalars['coin']['output']>
  length: Scalars['bigint']['output']
  period_order: Scalars['bigint']['output']
  /** An object relationship */
  vesting_account: Vesting_Account
}

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Period_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Vesting_Period_Max_Order_By>
  min?: InputMaybe<Vesting_Period_Min_Order_By>
  stddev?: InputMaybe<Vesting_Period_Stddev_Order_By>
  stddev_pop?: InputMaybe<Vesting_Period_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Vesting_Period_Stddev_Samp_Order_By>
  sum?: InputMaybe<Vesting_Period_Sum_Order_By>
  var_pop?: InputMaybe<Vesting_Period_Var_Pop_Order_By>
  var_samp?: InputMaybe<Vesting_Period_Var_Samp_Order_By>
  variance?: InputMaybe<Vesting_Period_Variance_Order_By>
}

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Period_Bool_Exp>>
  _not?: InputMaybe<Vesting_Period_Bool_Exp>
  _or?: InputMaybe<Array<Vesting_Period_Bool_Exp>>
  amount?: InputMaybe<Coin_Array_Comparison_Exp>
  length?: InputMaybe<Bigint_Comparison_Exp>
  period_order?: InputMaybe<Bigint_Comparison_Exp>
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>
}

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  amount?: InputMaybe<Order_By>
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  amount?: InputMaybe<Order_By>
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
  vesting_account?: InputMaybe<Vesting_Account_Order_By>
}

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order',
}

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** Streaming cursor of the table "vesting_period" */
export type Vesting_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Period_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Vesting_Period_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Array<Scalars['coin']['input']>>
  length?: InputMaybe<Scalars['bigint']['input']>
  period_order?: InputMaybe<Scalars['bigint']['input']>
}

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>
  period_order?: InputMaybe<Order_By>
}

export type EditAccountNameMutationVariables = Exact<{
  account: Scalars['String']['input']
  name: Scalars['String']['input']
  network: Scalars['String']['input']
}>

export type EditAccountNameMutation = {
  __typename?: 'mutation_root'
  changeAccountName?: { __typename?: 'UserOutput'; status?: string | null } | null
}

export type GetAccountNameQueryVariables = Exact<{
  address: Scalars['String']['input']
  network: Scalars['String']['input']
}>

export type GetAccountNameQuery = {
  __typename?: 'query_root'
  account: Array<{ __typename?: 'user_account'; name: string }>
}

export type GetAgentsBageDataQueryVariables = Exact<{ [key: string]: never }>

export type GetAgentsBageDataQuery = {
  __typename?: 'query_root'
  activeAgents: {
    __typename?: 'agent_aggregate'
    aggregate?: { __typename?: 'agent_aggregate_fields'; count: number } | null
  }
  allAgents: {
    __typename?: 'agent_aggregate'
    aggregate?: { __typename?: 'agent_aggregate_fields'; count: number } | null
  }
  totalMessages: {
    __typename?: 'operations_aggregate'
    aggregate?: { __typename?: 'operations_aggregate_fields'; count: number } | null
  }
  totalDelegation: {
    __typename?: 'agent_info_delegator_aggregate'
    aggregate?: {
      __typename?: 'agent_info_delegator_aggregate_fields'
      sum?: { __typename?: 'agent_info_delegator_sum_fields'; stake?: any | null } | null
    } | null
  }
  supportedChains: {
    __typename?: 'protocol_executor_aggregate'
    aggregate?: { __typename?: 'protocol_executor_aggregate_fields'; count: number } | null
  }
  inflightMessages: {
    __typename?: 'operations_aggregate'
    aggregate?: { __typename?: 'operations_aggregate_fields'; count: number } | null
  }
  confirmedMessages: {
    __typename?: 'operation_count_agent_address_aggregate'
    aggregate?: {
      __typename?: 'operation_count_agent_address_aggregate_fields'
      sum?: {
        __typename?: 'operation_count_agent_address_sum_fields'
        msg_count?: any | null
      } | null
    } | null
  }
}

export type GetAgentsByFiltersQueryVariables = Exact<{
  where?: InputMaybe<Agent_Bool_Exp>
  order_by?: InputMaybe<Array<Agent_Order_By> | Agent_Order_By>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  delegatorAddress?: InputMaybe<Scalars['String']['input']>
}>

export type GetAgentsByFiltersQuery = {
  __typename?: 'query_root'
  agent: Array<{
    __typename?: 'agent'
    id: number
    agent_address: string
    banned: boolean
    created_at: any
    paused: boolean
    reward_address: string
    agent_protocol_supports: Array<{
      __typename?: 'agent_protocol_support'
      protocol_id: string
      id: number
      created_at: any
      agent_address: string
      removed: boolean
      transmitter: string
      success_message_count?: {
        __typename?: 'protocol_transmitter_success_message_count'
        msg_count?: any | null
      } | null
      protocol: {
        __typename?: 'protocol'
        id: number
        protocol_id: string
        protocol_executors: Array<{ __typename?: 'protocol_executor'; chain_id: any }>
      }
    }>
    operations_count?: {
      __typename?: 'operation_count_agent_address'
      msg_count?: any | null
    } | null
    operation_count_total?: {
      __typename?: 'operation_total_count_agent_address'
      msg_count?: any | null
    } | null
    agentInfoData?: {
      __typename?: 'agent_info'
      active_round_stake: any
      address: string
      personal_stake: any
      relatime_stake: any
      id: number
      fee: any
      unclaimed_rewards: any
      deligatedSum: {
        __typename?: 'agent_info_delegator_aggregate'
        aggregate?: {
          __typename?: 'agent_info_delegator_aggregate_fields'
          sum?: { __typename?: 'agent_info_delegator_sum_fields'; stake?: any | null } | null
        } | null
      }
      currentDelegated: Array<{
        __typename?: 'agent_info_delegator'
        id: number
        stake: any
        address: string
      }>
    } | null
    agent_name?: { __typename?: 'agent_name'; name: string } | null
  }>
}

export type GetAgentsByAddressAndAgentAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>
  agentAddress?: InputMaybe<Scalars['String']['input']>
}>

export type GetAgentsByAddressAndAgentAddressQuery = {
  __typename?: 'query_root'
  agent_info_delegator: Array<{
    __typename?: 'agent_info_delegator'
    id: number
    stake: any
    unclaimed_rewards: any
  }>
}

export type GetAgentsDelegatedAmountQueryVariables = Exact<{
  delegatorAddress?: InputMaybe<Scalars['String']['input']>
}>

export type GetAgentsDelegatedAmountQuery = {
  __typename?: 'query_root'
  agent_info_delegator_aggregate: {
    __typename?: 'agent_info_delegator_aggregate'
    aggregate?: {
      __typename?: 'agent_info_delegator_aggregate_fields'
      sum?: { __typename?: 'agent_info_delegator_sum_fields'; stake?: any | null } | null
    } | null
  }
}

export type GetAgentsByAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>
  order_by?: InputMaybe<Array<Agent_Order_By> | Agent_Order_By>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type GetAgentsByAddressQuery = {
  __typename?: 'query_root'
  agent: Array<{
    __typename?: 'agent'
    id: number
    agent_address: string
    banned: boolean
    created_at: any
    paused: boolean
    reward_address: string
    agent_protocol_supports: Array<{
      __typename?: 'agent_protocol_support'
      protocol_id: string
      id: number
      created_at: any
      agent_address: string
      removed: boolean
      transmitter: string
      success_message_count?: {
        __typename?: 'protocol_transmitter_success_message_count'
        msg_count?: any | null
      } | null
      protocol: {
        __typename?: 'protocol'
        id: number
        protocol_id: string
        protocol_executors: Array<{ __typename?: 'protocol_executor'; chain_id: any }>
      }
    }>
    operations_count?: {
      __typename?: 'operation_count_agent_address'
      msg_count?: any | null
    } | null
    operation_count_total?: {
      __typename?: 'operation_total_count_agent_address'
      msg_count?: any | null
    } | null
    agentInfoData?: {
      __typename?: 'agent_info'
      active_round_stake: any
      address: string
      personal_stake: any
      relatime_stake: any
      id: number
      fee: any
      deligatedSum: {
        __typename?: 'agent_info_delegator_aggregate'
        aggregate?: {
          __typename?: 'agent_info_delegator_aggregate_fields'
          sum?: { __typename?: 'agent_info_delegator_sum_fields'; stake?: any | null } | null
        } | null
      }
      currentDelegated: Array<{
        __typename?: 'agent_info_delegator'
        id: number
        stake: any
        address: string
      }>
    } | null
    agent_name?: { __typename?: 'agent_name'; name: string } | null
  }>
}

export type GetFrontendConfigQueryVariables = Exact<{
  id: Scalars['Int']['input']
}>

export type GetFrontendConfigQuery = {
  __typename?: 'query_root'
  frontend_configs_by_pk?: { __typename?: 'frontend_configs'; id: number; config: any } | null
}

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never }>

export type AverageBlockTimeQuery = {
  __typename?: 'query_root'
  averageBlockTime: Array<{ __typename?: 'average_block_time_per_hour'; averageTime: any }>
}

export type LatestBlockHeightListenerQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type LatestBlockHeightListenerQuery = {
  __typename?: 'query_root'
  height: Array<{ __typename?: 'block'; height: any }>
}

export type BlocksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Block_Bool_Exp>
}>

export type BlocksQuery = {
  __typename?: 'query_root'
  blocks: Array<{
    __typename?: 'block'
    height: any
    hash: string
    timestamp: any
    txs?: number | null
    validator?: {
      __typename?: 'validator'
      validatorInfo?: {
        __typename?: 'validator_info'
        self_delegate_address?: string | null
        operatorAddress: string
      } | null
      validatorDescriptions: Array<{
        __typename?: 'validator_description'
        moniker?: string | null
        identity?: string | null
      }>
    } | null
  }>
}

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Block_Bool_Exp>
}>

export type BlocksListenerSubscription = {
  __typename?: 'subscription_root'
  blocks: Array<{
    __typename?: 'block'
    height: any
    hash: string
    timestamp: any
    txs?: number | null
    validator?: {
      __typename?: 'validator'
      validatorInfo?: {
        __typename?: 'validator_info'
        self_delegate_address?: string | null
        operatorAddress: string
      } | null
      validatorDescriptions: Array<{
        __typename?: 'validator_description'
        moniker?: string | null
        identity?: string | null
      }>
    } | null
  }>
}

export type GetTransactionsPerBlockQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
}>

export type GetTransactionsPerBlockQuery = {
  __typename?: 'query_root'
  block: Array<{
    __typename?: 'block'
    timestamp: any
    transactions: Array<{
      __typename: 'transaction'
      height: any
      hash: string
      memo?: string | null
      success: boolean
      fee: any
      messages: any
      logs?: any | null
      gasUsed?: any | null
      gasWanted?: any | null
    }>
  }>
}

export type GetBlocksByHashQueryVariables = Exact<{
  hash?: InputMaybe<Scalars['String']['input']>
}>

export type GetBlocksByHashQuery = {
  __typename?: 'query_root'
  blocks: Array<{
    __typename?: 'block'
    height: any
    hash: string
    timestamp: any
    txs?: number | null
    validator?: {
      __typename?: 'validator'
      validatorInfo?: {
        __typename?: 'validator_info'
        self_delegate_address?: string | null
        operatorAddress: string
      } | null
      validatorDescriptions: Array<{
        __typename?: 'validator_description'
        moniker?: string | null
        identity?: string | null
      }>
    } | null
  }>
}

export type GetTransactionStatusQueryVariables = Exact<{
  txHash: Scalars['String']['input']
  destChainId: Scalars['numeric']['input']
  sourceChainId: Scalars['numeric']['input']
}>

export type GetTransactionStatusQuery = {
  __typename?: 'query_root'
  bridge?: {
    __typename?: 'bridge_operations_ActionType'
    address_from?: string | null
    created_at: any
    failed: boolean
    id: number
    operation_one_hash?: string | null
    operation_one_tx_hash?: string | null
    operation_two_hash?: string | null
    operation_two_tx_hash?: string | null
    src_hash: string
    step: number
    updated_at: any
  } | null
}

export type BridgeOperationsListenerSubscriptionVariables = Exact<{
  address: Scalars['String']['input']
}>

export type BridgeOperationsListenerSubscription = {
  __typename?: 'subscription_root'
  common_bridge_operations: Array<{
    __typename?: 'common_bridge_operations'
    amount: string
    arrived_at?: any | null
    bridge_protocol: string
    created_at: any
    dst_chain_id: string
    dst_tx_hash?: string | null
    metadata: any
    id: any
    sender: string
    src_chain_id: string
    src_tx_hash: string
    status: string
    token: string
    updated_at: any
    recipient: string
  }>
}

export type GetBridgeOperationsByTxHasQueryVariables = Exact<{
  address: Scalars['String']['input']
}>

export type GetBridgeOperationsByTxHasQuery = {
  __typename?: 'query_root'
  common_bridge_operations: Array<{
    __typename?: 'common_bridge_operations'
    amount: string
    arrived_at?: any | null
    bridge_protocol: string
    created_at: any
    dst_chain_id: string
    dst_tx_hash?: string | null
    metadata: any
    id: any
    sender: string
    src_chain_id: string
    src_tx_hash: string
    status: string
    token: string
    updated_at: any
    recipient: string
  }>
}

export type GetBridgeOperationsBySenderQueryVariables = Exact<{
  address: Scalars['String']['input']
}>

export type GetBridgeOperationsBySenderQuery = {
  __typename?: 'query_root'
  common_bridge_operations: Array<{
    __typename?: 'common_bridge_operations'
    amount: string
    arrived_at?: any | null
    bridge_protocol: string
    created_at: any
    dst_chain_id: string
    dst_tx_hash?: string | null
    metadata: any
    id: any
    sender: string
    src_chain_id: string
    src_tx_hash: string
    status: string
    token: string
    updated_at: any
    recipient: string
  }>
}

export type GetBridgeOperationsCountQueryVariables = Exact<{
  address: Scalars['String']['input']
}>

export type GetBridgeOperationsCountQuery = {
  __typename?: 'query_root'
  common_bridge_operations_aggregate: {
    __typename?: 'common_bridge_operations_aggregate'
    aggregate?: {
      __typename?: 'common_bridge_operations_aggregate_fields'
      count: number
    } | null
  }
}

export type GetOperationsByFiltersQueryVariables = Exact<{
  where?: InputMaybe<Operations_Bool_Exp>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type GetOperationsByFiltersQuery = {
  __typename?: 'query_root'
  operations: Array<{
    __typename?: 'operations'
    src_tx_sender: string
    src_tx_hash: string
    src_chain_id: any
    src_block_number: any
    required_confirmations: number
    protocol_id: string
    protocol_address: string
    params: string
    nonce: any
    in_order: boolean
    id: number
    hash: string
    function_selector: string
    dst_chain_id: any
    destination_tx_hash: string
    delivered: boolean
    created_at: any
    operation_proof?: {
      __typename?: 'operation_proof'
      operation_proof_transmitter_sigs_aggregate: {
        __typename?: 'operation_proof_transmitter_sig_aggregate'
        aggregate?: {
          __typename?: 'operation_proof_transmitter_sig_aggregate_fields'
          count: number
        } | null
      }
    } | null
  }>
}

export type MessagesListenerSubscriptionVariables = Exact<{
  where?: InputMaybe<Operations_Bool_Exp>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type MessagesListenerSubscription = {
  __typename?: 'subscription_root'
  operations: Array<{
    __typename?: 'operations'
    src_tx_sender: string
    src_tx_hash: string
    src_chain_id: any
    src_block_number: any
    required_confirmations: number
    protocol_id: string
    protocol_address: string
    params: string
    nonce: any
    in_order: boolean
    id: number
    hash: string
    function_selector: string
    dst_chain_id: any
    destination_tx_hash: string
    delivered: boolean
    created_at: any
    operation_proof?: {
      __typename?: 'operation_proof'
      operation_proof_transmitter_sigs_aggregate: {
        __typename?: 'operation_proof_transmitter_sig_aggregate'
        aggregate?: {
          __typename?: 'operation_proof_transmitter_sig_aggregate_fields'
          count: number
        } | null
      }
    } | null
  }>
}

export type ParamsQueryVariables = Exact<{ [key: string]: never }>

export type ParamsQuery = {
  __typename?: 'query_root'
  staking_params: Array<{ __typename?: 'staking_params'; params: any }>
  slashing_params: Array<{ __typename?: 'slashing_params'; params: any }>
  gov_params: Array<{ __typename?: 'gov_params'; params: any }>
  distribution_params: Array<{ __typename?: 'distribution_params'; params: any }>
}

export type GetProtocolsByFiltersQueryVariables = Exact<{
  where?: InputMaybe<Protocol_Bool_Exp>
  order_by?: InputMaybe<Array<Protocol_Order_By> | Protocol_Order_By>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type GetProtocolsByFiltersQuery = {
  __typename?: 'query_root'
  protocol: Array<{
    __typename?: 'protocol'
    consensus_target_rate: any
    created_at: any
    data_bet_amount: any
    data_bet_reward: any
    first_data_bet_reward: any
    first_msg_bet_reward: any
    id: number
    max_transmitters: any
    min_delegate_amount: any
    min_personal_amount: any
    msg_bet_amount: any
    msg_bet_reward: any
    owner: string
    protocol_id: string
    operations_count?: {
      __typename?: 'operations_count_by_protocol'
      count?: any | null
    } | null
    protocol_transmitters: Array<{ __typename?: 'protocol_transmitter'; transmitter: string }>
    protocol_executors: Array<{ __typename?: 'protocol_executor'; chain_id: any }>
    protocol_transmitters_aggregate: {
      __typename?: 'protocol_transmitter_aggregate'
      aggregate?: {
        __typename?: 'protocol_transmitter_aggregate_fields'
        count: number
      } | null
    }
  }>
}

export type GetProtocolByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>
}>

export type GetProtocolByIdQuery = {
  __typename?: 'query_root'
  protocol: Array<{
    __typename?: 'protocol'
    consensus_target_rate: any
    created_at: any
    data_bet_amount: any
    data_bet_reward: any
    balance: any
    first_data_bet_reward: any
    first_msg_bet_reward: any
    id: number
    max_transmitters: any
    min_delegate_amount: any
    min_personal_amount: any
    msg_bet_amount: any
    msg_bet_reward: any
    owner: string
    protocol_id: string
    operations: Array<{ __typename?: 'operations'; required_confirmations: number }>
    protocol_proposers: Array<{ __typename?: 'protocol_proposer'; chain_id: any }>
    operations_count?: {
      __typename?: 'operations_count_by_protocol'
      count?: any | null
    } | null
    protocol_transmitters: Array<{ __typename?: 'protocol_transmitter'; transmitter: string }>
    protocol_executors: Array<{ __typename?: 'protocol_executor'; chain_id: any }>
    protocol_transmitters_aggregate: {
      __typename?: 'protocol_transmitter_aggregate'
      aggregate?: {
        __typename?: 'protocol_transmitter_aggregate_fields'
        count: number
      } | null
    }
    protocol_proposers_aggregate: {
      __typename?: 'protocol_proposer_aggregate'
      aggregate?: { __typename?: 'protocol_proposer_aggregate_fields'; count: number } | null
    }
    protocol_executors_aggregate: {
      __typename?: 'protocol_executor_aggregate'
      aggregate?: { __typename?: 'protocol_executor_aggregate_fields'; count: number } | null
    }
  }>
}

export type TokenomicsQueryVariables = Exact<{ [key: string]: never }>

export type TokenomicsQuery = {
  __typename?: 'query_root'
  stakingParams: Array<{ __typename?: 'staking_params'; params: any }>
  stakingPool: Array<{ __typename?: 'staking_pool'; bonded: string; unbonded: string }>
  supply: Array<{ __typename?: 'supply'; coins: Array<any> }>
}

export type TransactionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Transaction_Bool_Exp>
}>

export type TransactionsQuery = {
  __typename?: 'query_root'
  transactions: Array<{
    __typename: 'transaction'
    height: any
    hash: string
    memo?: string | null
    success: boolean
    fee: any
    messages: any
    logs?: any | null
    gasUsed?: any | null
    gasWanted?: any | null
    block: { __typename: 'block'; timestamp: any }
  }>
}

export type TransactionQueryVariables = Exact<{
  ethHash?: InputMaybe<Scalars['String']['input']>
}>

export type TransactionQuery = {
  __typename?: 'query_root'
  transaction: Array<{
    __typename: 'transaction'
    height: any
    hash: string
    memo?: string | null
    success: boolean
    fee: any
    messages: any
    logs?: any | null
    gasUsed?: any | null
    gasWanted?: any | null
    block: { __typename: 'block'; timestamp: any }
  }>
}

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Transaction_Bool_Exp>
}>

export type TransactionsListenerSubscription = {
  __typename?: 'subscription_root'
  transactions: Array<{
    __typename: 'transaction'
    height: any
    hash: string
    memo?: string | null
    success: boolean
    fee: any
    messages: any
    logs?: any | null
    gasUsed?: any | null
    gasWanted?: any | null
    block: { __typename: 'block'; timestamp: any }
  }>
}

export type PriceChartsSubscriptionSubscriptionVariables = Exact<{
  where?: InputMaybe<Price_Charts_Bool_Exp>
}>

export type PriceChartsSubscriptionSubscription = {
  __typename?: 'subscription_root'
  price_charts: Array<{
    __typename?: 'price_charts'
    asset_id?: any | null
    category_id?: number | null
    chart?: string | null
    data_key?: string | null
    time?: any | null
    value?: string | null
    assets_info?: {
      __typename?: 'assets_info'
      icon_url: string
      float_digits: number
      decimals: number
      category?: { __typename?: 'category'; name: string } | null
    } | null
  }>
}

export type MarketCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type MarketCategoriesQuery = {
  __typename?: 'query_root'
  category: Array<{ __typename?: 'category'; id: number; name: string }>
}

export type MarketUsdRateQueryVariables = Exact<{ [key: string]: never }>

export type MarketUsdRateQuery = {
  __typename?: 'query_root'
  usd_rate: Array<{ __typename?: 'usd_rate'; rate: number; currency: string }>
}

export type TotalValueSecuredQueryVariables = Exact<{ [key: string]: never }>

export type TotalValueSecuredQuery = {
  __typename?: 'query_root'
  total_value_secured: Array<{ __typename?: 'total_value_secured'; value: any }>
}

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never }>

export type ActiveValidatorCountQuery = {
  __typename?: 'query_root'
  activeTotal: {
    __typename?: 'validator_status_aggregate'
    aggregate?: { __typename?: 'validator_status_aggregate_fields'; count: number } | null
  }
  inactiveTotal: {
    __typename?: 'validator_status_aggregate'
    aggregate?: { __typename?: 'validator_status_aggregate_fields'; count: number } | null
  }
  total: {
    __typename?: 'validator_status_aggregate'
    aggregate?: { __typename?: 'validator_status_aggregate_fields'; count: number } | null
  }
}

export type GetValidatorsQueryVariables = Exact<{
  where?: InputMaybe<Validator_Bool_Exp>
}>

export type GetValidatorsQuery = {
  __typename?: 'query_root'
  stakingPool: Array<{ __typename?: 'staking_pool'; bondedTokens: string }>
  validator: Array<{
    __typename?: 'validator'
    validatorStatuses: Array<{
      __typename?: 'validator_status'
      status: number
      jailed: boolean
      height: any
    }>
    validatorDescriptions: Array<{
      __typename?: 'validator_description'
      moniker?: string | null
      avatar_url?: string | null
    }>
    validatorSigningInfos: Array<{
      __typename?: 'validator_signing_info'
      tombstoned: boolean
      missedBlocksCounter: any
      startHeight: any
    }>
    validatorInfo?: {
      __typename?: 'validator_info'
      operatorAddress: string
      selfDelegateAddress?: string | null
    } | null
    validatorVotingPowers: Array<{
      __typename?: 'validator_voting_power'
      votingPower: string
    }>
    validatorCommissions: Array<{ __typename?: 'validator_commission'; commission: any }>
    validatorDelegations: Array<{
      __typename?: 'validator_delegations'
      total_delegations: string
      self_delegation: string
    }>
  }>
  slashingParams: Array<{ __typename?: 'slashing_params'; params: any }>
  validatorStats: Array<{
    __typename?: 'validator_stats'
    apr: number
    validator: {
      __typename?: 'validator'
      validator_info?: { __typename?: 'validator_info'; operator_address: string } | null
    }
  }>
}

export type GetValidatorByOperatorAddressQueryVariables = Exact<{
  operatorAddress: Scalars['String']['input']
}>

export type GetValidatorByOperatorAddressQuery = {
  __typename?: 'query_root'
  validatorInfo: Array<{
    __typename?: 'validator_info'
    validator: {
      __typename?: 'validator'
      validatorStatuses: Array<{
        __typename?: 'validator_status'
        status: number
        jailed: boolean
        height: any
      }>
      validatorDescriptions: Array<{
        __typename?: 'validator_description'
        moniker?: string | null
        avatar_url?: string | null
      }>
      validatorSigningInfos: Array<{
        __typename?: 'validator_signing_info'
        tombstoned: boolean
        missedBlocksCounter: any
      }>
      validatorInfo?: {
        __typename?: 'validator_info'
        operatorAddress: string
        selfDelegateAddress?: string | null
      } | null
      validatorVotingPowers: Array<{
        __typename?: 'validator_voting_power'
        votingPower: string
      }>
      validatorCommissions: Array<{ __typename?: 'validator_commission'; commission: any }>
    }
  }>
}

export const EditAccountNameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditAccountName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'account' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'network' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'changeAccountName' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'arg' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'account' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'account' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'network' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'network' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'status' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditAccountNameMutation, EditAccountNameMutationVariables>
export const GetAccountNameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAccountName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'network' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'account' },
            name: { kind: 'Name', value: 'user_account' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_and' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'address' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'address' },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'network' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_ilike' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'network' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAccountNameQuery, GetAccountNameQueryVariables>
export const GetAgentsBageDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAgentsBageData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'activeAgents' },
            name: { kind: 'Name', value: 'agent_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_and' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'banned' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_neq' },
                                  value: { kind: 'BooleanValue', value: true },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'paused' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_neq' },
                                  value: { kind: 'BooleanValue', value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'allAgents' },
            name: { kind: 'Name', value: 'agent_aggregate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalMessages' },
            name: { kind: 'Name', value: 'operations_aggregate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'totalDelegation' },
            name: { kind: 'Name', value: 'agent_info_delegator_aggregate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sum' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'stake' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'supportedChains' },
            name: { kind: 'Name', value: 'protocol_executor_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct_on' },
                value: { kind: 'EnumValue', value: 'chain_id' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'inflightMessages' },
            name: { kind: 'Name', value: 'operations_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'is_inflight' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_inflight' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: { kind: 'BooleanValue', value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'confirmedMessages' },
            name: { kind: 'Name', value: 'operation_count_agent_address_aggregate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sum' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAgentsBageDataQuery, GetAgentsBageDataQueryVariables>
export const GetAgentsByFiltersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAgentsByFilters' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'agent_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'order_by' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'agent_order_by' } },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'delegatorAddress' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'agent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'order_by' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agent_protocol_supports' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'agent_address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'removed' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'transmitter' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'success_message_count' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'protocol' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'protocol_executors' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'chain_id' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'agent_address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operations_count' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operation_count_total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'agentInfoData' },
                  name: { kind: 'Name', value: 'agent_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'active_round_stake' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'personal_stake' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'relatime_stake' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'unclaimed_rewards' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'deligatedSum' },
                        name: { kind: 'Name', value: 'agent_info_delegators_aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'aggregate' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sum' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'stake' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'currentDelegated' },
                        name: { kind: 'Name', value: 'agent_info_delegators' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'where' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'address' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_eq' },
                                        value: {
                                          kind: 'Variable',
                                          name: { kind: 'Name', value: 'delegatorAddress' },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'stake' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'banned' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'paused' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reward_address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agent_name' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAgentsByFiltersQuery, GetAgentsByFiltersQueryVariables>
export const GetAgentsByAddressAndAgentAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAgentsByAddressAndAgentAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'agentAddress' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'agent_info_delegator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_and' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'address' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'address' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'agent_info' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'address' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'agentAddress' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'stake' } },
                { kind: 'Field', name: { kind: 'Name', value: 'unclaimed_rewards' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAgentsByAddressAndAgentAddressQuery,
  GetAgentsByAddressAndAgentAddressQueryVariables
>
export const GetAgentsDelegatedAmountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAgentsDelegatedAmount' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'delegatorAddress' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'agent_info_delegator_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'address' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'delegatorAddress' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sum' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'stake' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAgentsDelegatedAmountQuery,
  GetAgentsDelegatedAmountQueryVariables
>
export const GetAgentsByAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAgentsByAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'order_by' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'agent_order_by' } },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'agent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'agent_info' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'agent_info_delegators' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'address' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_eq' },
                                        value: {
                                          kind: 'Variable',
                                          name: { kind: 'Name', value: 'address' },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'order_by' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agent_protocol_supports' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'agent_address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'removed' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'transmitter' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'success_message_count' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'protocol' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'protocol_executors' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'chain_id' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'agent_address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operations_count' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operation_count_total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'msg_count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'agentInfoData' },
                  name: { kind: 'Name', value: 'agent_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'active_round_stake' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'personal_stake' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'relatime_stake' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'deligatedSum' },
                        name: { kind: 'Name', value: 'agent_info_delegators_aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'aggregate' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sum' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'stake' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'currentDelegated' },
                        name: { kind: 'Name', value: 'agent_info_delegators' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'where' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'address' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_eq' },
                                        value: {
                                          kind: 'Variable',
                                          name: { kind: 'Name', value: 'address' },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'stake' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'banned' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'paused' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reward_address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'agent_name' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAgentsByAddressQuery, GetAgentsByAddressQueryVariables>
export const GetFrontendConfigDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFrontendConfig' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'frontend_configs_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'config' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFrontendConfigQuery, GetFrontendConfigQueryVariables>
export const AverageBlockTimeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AverageBlockTime' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'averageBlockTime' },
            name: { kind: 'Name', value: 'average_block_time_per_hour' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'averageTime' },
                  name: { kind: 'Name', value: 'average_time' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>
export const LatestBlockHeightListenerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LatestBlockHeightListener' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'height' },
            name: { kind: 'Name', value: 'block' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'height' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LatestBlockHeightListenerQuery,
  LatestBlockHeightListenerQueryVariables
>
export const BlocksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Blocks' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '50' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'block_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'blocks' },
            name: { kind: 'Name', value: 'block' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'txs' },
                  name: { kind: 'Name', value: 'num_txs' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorInfo' },
                        name: { kind: 'Name', value: 'validator_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'operatorAddress' },
                              name: { kind: 'Name', value: 'operator_address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'self_delegate_address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorDescriptions' },
                        name: { kind: 'Name', value: 'validator_descriptions' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'moniker' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'identity' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlocksQuery, BlocksQueryVariables>
export const BlocksListenerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'BlocksListener' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '50' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'block_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'blocks' },
            name: { kind: 'Name', value: 'block' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'txs' },
                  name: { kind: 'Name', value: 'num_txs' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorInfo' },
                        name: { kind: 'Name', value: 'validator_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'operatorAddress' },
                              name: { kind: 'Name', value: 'operator_address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'self_delegate_address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorDescriptions' },
                        name: { kind: 'Name', value: 'validator_descriptions' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'moniker' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'identity' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>
export const GetTransactionsPerBlockDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTransactionsPerBlock' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'hash' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'block' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'hash' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'hash' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'transactions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'memo' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'gasUsed' },
                        name: { kind: 'Name', value: 'gas_used' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'gasWanted' },
                        name: { kind: 'Name', value: 'gas_wanted' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'messages' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'logs' } },
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTransactionsPerBlockQuery,
  GetTransactionsPerBlockQueryVariables
>
export const GetBlocksByHashDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBlocksByHash' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'hash' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'blocks' },
            name: { kind: 'Name', value: 'block' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'hash' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'hash' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'txs' },
                  name: { kind: 'Name', value: 'num_txs' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorInfo' },
                        name: { kind: 'Name', value: 'validator_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'operatorAddress' },
                              name: { kind: 'Name', value: 'operator_address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'self_delegate_address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorDescriptions' },
                        name: { kind: 'Name', value: 'validator_descriptions' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'moniker' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'identity' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlocksByHashQuery, GetBlocksByHashQueryVariables>
export const GetTransactionStatusDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTransactionStatus' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'txHash' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'destChainId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'numeric' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sourceChainId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'numeric' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bridge' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'arg1' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'dst_chain_id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'destChainId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'src_chain_id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sourceChainId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'tx_hash' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'txHash' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address_from' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'failed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'operation_one_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'operation_one_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'operation_two_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'operation_two_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'step' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTransactionStatusQuery, GetTransactionStatusQueryVariables>
export const BridgeOperationsListenerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'BridgeOperationsListener' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'common_bridge_operations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_or' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'sender' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: '_eq' },
                                      value: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: 'address' },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'recipient' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: '_eq' },
                                      value: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: 'address' },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'metadata' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: '_contains' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: {
                                              kind: 'Name',
                                              value: 'additional_account',
                                            },
                                            value: {
                                              kind: 'Variable',
                                              name: { kind: 'Name', value: 'address' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'arrived_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bridge_protocol' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'recipient' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BridgeOperationsListenerSubscription,
  BridgeOperationsListenerSubscriptionVariables
>
export const GetBridgeOperationsByTxHasDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBridgeOperationsByTxHas' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'common_bridge_operations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'src_tx_hash' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'address' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'arrived_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bridge_protocol' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'recipient' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBridgeOperationsByTxHasQuery,
  GetBridgeOperationsByTxHasQueryVariables
>
export const GetBridgeOperationsBySenderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBridgeOperationsBySender' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'common_bridge_operations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sender' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'address' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'arrived_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bridge_protocol' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'recipient' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBridgeOperationsBySenderQuery,
  GetBridgeOperationsBySenderQueryVariables
>
export const GetBridgeOperationsCountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBridgeOperationsCount' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'common_bridge_operations_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sender' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'address' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBridgeOperationsCountQuery,
  GetBridgeOperationsCountQueryVariables
>
export const GetOperationsByFiltersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOperationsByFilters' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'operations_bool_exp' } },
          defaultValue: {
            kind: 'ObjectValue',
            fields: [
              {
                kind: 'ObjectField',
                name: { kind: 'Name', value: '_and' },
                value: { kind: 'ObjectValue', fields: [] },
              },
            ],
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'operations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_sender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_block_number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'required_confirmations' } },
                { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'protocol_address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'params' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                { kind: 'Field', name: { kind: 'Name', value: 'in_order' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'function_selector' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'destination_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'delivered' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operation_proof' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'operation_proof_transmitter_sigs_aggregate',
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'aggregate' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOperationsByFiltersQuery, GetOperationsByFiltersQueryVariables>
export const MessagesListenerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'MessagesListener' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'operations_bool_exp' } },
          defaultValue: {
            kind: 'ObjectValue',
            fields: [
              {
                kind: 'ObjectField',
                name: { kind: 'Name', value: '_and' },
                value: { kind: 'ObjectValue', fields: [] },
              },
            ],
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'operations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'created_at' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_sender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'src_block_number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'required_confirmations' } },
                { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'protocol_address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'params' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
                { kind: 'Field', name: { kind: 'Name', value: 'in_order' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'function_selector' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dst_chain_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'destination_tx_hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'delivered' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operation_proof' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'operation_proof_transmitter_sigs_aggregate',
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'aggregate' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MessagesListenerSubscription,
  MessagesListenerSubscriptionVariables
>
export const ParamsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Params' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'staking_params' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'params' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slashing_params' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'params' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'gov_params' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'params' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'distribution_params' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'params' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ParamsQuery, ParamsQueryVariables>
export const GetProtocolsByFiltersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProtocolsByFilters' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'protocol_bool_exp' } },
          defaultValue: {
            kind: 'ObjectValue',
            fields: [
              {
                kind: 'ObjectField',
                name: { kind: 'Name', value: '_and' },
                value: { kind: 'ObjectValue', fields: [] },
              },
            ],
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'order_by' } },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'protocol_order_by' } },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'protocol' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'order_by' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'consensus_target_rate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'data_bet_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'data_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_data_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_msg_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'max_transmitters' } },
                { kind: 'Field', name: { kind: 'Name', value: 'min_delegate_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'min_personal_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'msg_bet_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'msg_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'owner' } },
                { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operations_count' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'transmitter' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_executors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'chain_id' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_transmitters_aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'columns' },
                                  value: { kind: 'EnumValue', value: 'id' },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProtocolsByFiltersQuery, GetProtocolsByFiltersQueryVariables>
export const GetProtocolByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProtocolById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'protocol' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'protocol_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operations' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'created_at' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'required_confirmations' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'consensus_target_rate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'data_bet_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'data_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_data_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'first_msg_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_proposers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'chain_id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'max_transmitters' } },
                { kind: 'Field', name: { kind: 'Name', value: 'min_delegate_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'min_personal_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'msg_bet_amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'msg_bet_reward' } },
                { kind: 'Field', name: { kind: 'Name', value: 'owner' } },
                { kind: 'Field', name: { kind: 'Name', value: 'protocol_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'operations_count' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_transmitters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'transmitter' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_executors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'chain_id' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_transmitters_aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'columns' },
                                  value: { kind: 'EnumValue', value: 'id' },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_proposers_aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'protocol_executors_aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProtocolByIdQuery, GetProtocolByIdQueryVariables>
export const TokenomicsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Tokenomics' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stakingParams' },
            name: { kind: 'Name', value: 'staking_params' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'params' } }],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stakingPool' },
            name: { kind: 'Name', value: 'staking_pool' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'bonded' },
                  name: { kind: 'Name', value: 'bonded_tokens' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'unbonded' },
                  name: { kind: 'Name', value: 'not_bonded_tokens' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'supply' },
            name: { kind: 'Name', value: 'supply' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'coins' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TokenomicsQuery, TokenomicsQueryVariables>
export const TransactionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Transactions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'transaction_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'transactions' },
            name: { kind: 'Name', value: 'transaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'memo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'gasUsed' },
                  name: { kind: 'Name', value: 'gas_used' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'gasWanted' },
                  name: { kind: 'Name', value: 'gas_wanted' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'block' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'messages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logs' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TransactionsQuery, TransactionsQueryVariables>
export const TransactionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Transaction' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'ethHash' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eth_hash' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'ethHash' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'memo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'gasUsed' },
                  name: { kind: 'Name', value: 'gas_used' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'gasWanted' },
                  name: { kind: 'Name', value: 'gas_wanted' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'block' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'messages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logs' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TransactionQuery, TransactionQueryVariables>
export const TransactionsListenerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'TransactionsListener' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '7' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'transaction_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'transactions' },
            name: { kind: 'Name', value: 'transaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'memo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'fee' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'gasUsed' },
                  name: { kind: 'Name', value: 'gas_used' },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'gasWanted' },
                  name: { kind: 'Name', value: 'gas_wanted' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'block' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'messages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logs' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TransactionsListenerSubscription,
  TransactionsListenerSubscriptionVariables
>
export const PriceChartsSubscriptionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'priceChartsSubscription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'price_charts_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'price_charts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'asset_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'category_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'chart' } },
                { kind: 'Field', name: { kind: 'Name', value: 'data_key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'assets_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'icon_url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'float_digits' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'decimals' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PriceChartsSubscriptionSubscription,
  PriceChartsSubscriptionSubscriptionVariables
>
export const MarketCategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MarketCategories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'category' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarketCategoriesQuery, MarketCategoriesQueryVariables>
export const MarketUsdRateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MarketUsdRate' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'usd_rate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'rate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarketUsdRateQuery, MarketUsdRateQueryVariables>
export const TotalValueSecuredDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'TotalValueSecured' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'total_value_secured' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'time' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TotalValueSecuredQuery, TotalValueSecuredQueryVariables>
export const ActiveValidatorCountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ActiveValidatorCount' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'activeTotal' },
            name: { kind: 'Name', value: 'validator_status_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'status' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'IntValue', value: '3' },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'inactiveTotal' },
            name: { kind: 'Name', value: 'validator_status_aggregate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'status' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_neq' },
                            value: { kind: 'IntValue', value: '3' },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'total' },
            name: { kind: 'Name', value: 'validator_status_aggregate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregate' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'count' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>
export const GetValidatorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getValidators' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'validator_bool_exp' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stakingPool' },
            name: { kind: 'Name', value: 'staking_pool' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'bondedTokens' },
                  name: { kind: 'Name', value: 'bonded_tokens' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'real_voting_power' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'voting_power' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorStatuses' },
                  name: { kind: 'Name', value: 'validator_statuses' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'height' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'jailed' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorDescriptions' },
                  name: { kind: 'Name', value: 'validator_descriptions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'moniker' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'avatar_url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorSigningInfos' },
                  name: { kind: 'Name', value: 'validator_signing_infos' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'height' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'missedBlocksCounter' },
                        name: { kind: 'Name', value: 'missed_blocks_counter' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'tombstoned' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'startHeight' },
                        name: { kind: 'Name', value: 'start_height' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorInfo' },
                  name: { kind: 'Name', value: 'validator_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'operatorAddress' },
                        name: { kind: 'Name', value: 'operator_address' },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'selfDelegateAddress' },
                        name: { kind: 'Name', value: 'self_delegate_address' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorVotingPowers' },
                  name: { kind: 'Name', value: 'validator_voting_powers' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'offset' },
                      value: { kind: 'IntValue', value: '0' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'height' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'votingPower' },
                        name: { kind: 'Name', value: 'voting_power' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorCommissions' },
                  name: { kind: 'Name', value: 'validator_commissions' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'height' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'commission' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorSigningInfos' },
                  name: { kind: 'Name', value: 'validator_signing_infos' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'height' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '1' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'missedBlocksCounter' },
                        name: { kind: 'Name', value: 'missed_blocks_counter' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'validatorDelegations' },
                  name: { kind: 'Name', value: 'validator_delegations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'total_delegations' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'self_delegation' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'slashingParams' },
            name: { kind: 'Name', value: 'slashing_params' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'height' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'params' } }],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'validatorStats' },
            name: { kind: 'Name', value: 'validator_stats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'apr' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'validator_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'operator_address' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetValidatorsQuery, GetValidatorsQueryVariables>
export const GetValidatorByOperatorAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetValidatorByOperatorAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'operatorAddress' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'validatorInfo' },
            name: { kind: 'Name', value: 'validator_info' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'operator_address' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'operatorAddress' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorStatuses' },
                        name: { kind: 'Name', value: 'validator_statuses' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'jailed' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorDescriptions' },
                        name: { kind: 'Name', value: 'validator_descriptions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'moniker' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'avatar_url' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorSigningInfos' },
                        name: { kind: 'Name', value: 'validator_signing_infos' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'missedBlocksCounter' },
                              name: { kind: 'Name', value: 'missed_blocks_counter' },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'tombstoned' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorInfo' },
                        name: { kind: 'Name', value: 'validator_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'operatorAddress' },
                              name: { kind: 'Name', value: 'operator_address' },
                            },
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'selfDelegateAddress' },
                              name: { kind: 'Name', value: 'self_delegate_address' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorVotingPowers' },
                        name: { kind: 'Name', value: 'validator_voting_powers' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'offset' },
                            value: { kind: 'IntValue', value: '0' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'votingPower' },
                              name: { kind: 'Name', value: 'voting_power' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorCommissions' },
                        name: { kind: 'Name', value: 'validator_commissions' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'commission' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'validatorSigningInfos' },
                        name: { kind: 'Name', value: 'validator_signing_infos' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'height' },
                                  value: { kind: 'EnumValue', value: 'desc' },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'missedBlocksCounter' },
                              name: { kind: 'Name', value: 'missed_blocks_counter' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetValidatorByOperatorAddressQuery,
  GetValidatorByOperatorAddressQueryVariables
>
