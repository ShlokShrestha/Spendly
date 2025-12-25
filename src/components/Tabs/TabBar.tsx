import TabItem from "./TabItem";

const TabBar = () => {
  return (
    <div className="grid grid-cols-4 text-xs">
      <TabItem href="/dashboard" label="Dashboard" icon="🏠" />
      <TabItem href="/dashboard/expense" label="Expense" icon="💳" />
      <TabItem href="/dashboard/transaction" label="transaction" icon="✅" />
      <TabItem href="/dashboard/setting" label="Setting" icon="⚙️" />
    </div>
  );
};

export default TabBar;
